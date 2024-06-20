const db = require('../../../database/models')
const { validationResult } = require("express-validator");
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const { category, title, price, discount, free_shipping, detail } = req.body;
  const image = req.file;
  const previousImage = product.image;
  

  try {
    const product = await db.Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    await db.Product.update(
      {
        category_id: +category,
        name: title ? title.trim() : title,
        price: +price,
        discount: +discount,
        free_shipping: free_shipping === "true",
        detail: detail ? detail.trim() : detail,
        image: image ? `/images/${image.filename}` : previousImage,
      },
      {
        where: { id: id },
      }
    );

    if (image && previousImage !== "/images/default.jpg") {
      const previousImagePath = path.join(__dirname, `../../public${previousImage}`);
      const fileExists = fs.existsSync(previousImagePath);

      if (fileExists) {
        fs.unlinkSync(previousImagePath);
      }
    }

    return res.status(200).json({ message: "Producto actualizado con exito" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

