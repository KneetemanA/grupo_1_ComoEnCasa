const path = require('path');
const fs = require('fs');
const db = require('../../database/models');
const { validationResult } = require("express-validator");

module.exports = async (req, res) => {
  const errors = validationResult(req);
  const login = req.session.user;

  if (errors.isEmpty()) {
    const { id } = req.params;
    const { category, title, price, discount, free_shipping, detail } = req.body;
    const image = req.file;

    try {
      const p = await db.Product.findByPk(id);
      const imagenPrevia = p.image;

      await db.Product.update(
        {
          category_id: +category,
          name: title ? title.trim() : title,
          price: +price,
          discount: +discount,
          free_shipping: free_shipping === "true",
          detail: detail ? detail.trim() : detail,
          image: image ? `/images/${image.filename}` : "/images/default.jpg",
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

      return res.redirect('/admin');
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).send("Internal Server Error");
    }
  } else {
    const { id } = req.params;
    db.Product.findByPk(id)
      .then((product) => {
        res.render("admin/editProduct", { productEdit: product,errors:errors.array(), userlogin: login }, (err, content) => {
          if (err) {
            res.send(err.message);
          } else {
            res.render("partials/dashboard", { views: content, userlogin: login });
          }
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
      });
  }
};
