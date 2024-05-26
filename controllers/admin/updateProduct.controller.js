const path = require('path');
const fs = require('fs');
const db = require('../../database/models');
const { validationResult } = require('express-validator'); 

module.exports = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/editarProduct", {
      errors: errors.array(),
      old: req.body,
      product: await db.Product.findByPk(id)
    });
  }

  const { category, name, price, discount, free_shipping, detail } = req.body;
  const image = req.file;

  try {
    const p = await db.Product.findByPk(id);
    const imagenPrevia = p.image;

    await db.Product.update(
      {
        category_id: +category,
        name: name ? name.trim() : name,
        price: +price,
        discount: +discount,
        free_shipping: free_shipping === "true",
        detail: detail ? detail.trim() : detail,
        image: image ? `/images/${image.filename}` : imagenPrevia,
      },
      {
        where: { id },
      }
    );

    if (image && imagenPrevia !== "/images/default.jpg") {
      const pathBefore = path.join(__dirname, `../../public${imagenPrevia}`);
      const existsFile = fs.existsSync(pathBefore);

      if (existsFile) {
        fs.unlinkSync(pathBefore);
      }
    }

    res.redirect('/admin');
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Server Error");
  }
};

 

