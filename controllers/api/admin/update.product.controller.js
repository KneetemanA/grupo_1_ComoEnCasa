const db = require('../../../database/models');
const path = require('path');
const fs = require('fs');

module.exports = async function (req, res) {
  const image = req.file;
  const { id } = req.params;

  try {
   
    const product = await db.Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const imagenPrevia = product.image;

   
    const updateData = {
      name: req.body.name,
      price: +req.body.price,
      discount: +req.body.discount,
      free_shipping: req.body.free_shipping === 'true',
      image: image ? `/images/${image.filename}` : imagenPrevia,
      detail: req.body.detail,
      category_id: req.body.category_id
    };

   
    await db.Product.update(updateData, {
      where: { id: id }
    });

 
    if (image && imagenPrevia !== "/images/default.jpg") {
      const pathBefore = path.join(__dirname, `../../../public${imagenPrevia}`);
      const existsFile = fs.existsSync(pathBefore);

      if (existsFile) {
        fs.unlinkSync(pathBefore);
      }
    }

    res.json({
      success: true,
      message: 'Actualizado'
    });

  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};