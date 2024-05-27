const db = require("../../database/models");
const { validationResult } = require("express-validator");

module.exports = function (req, res) {
  const errors = validationResult(req);
  const userlogin = req.session;

  if (errors.isEmpty()) {
    const { title, category, price, discount, freeShipping, detail } = req.body;

    const imgInfo = req.file;

    db.Product.create({
      name: title.trim(),
      price: +price,
      discount: +discount,
      free_shipping: freeShipping === "on",
      image: imgInfo ? `/images/${imgInfo.filename}` : "/images/default.jpg",
      detail: detail.trim(),
      category_id: +category,
    })
      .then((product) => {
        return res.redirect("/admin");
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Server error");
      });
  } else {
    res.render(
      "admin/crearProduct",
      {
        errors: errors.array(),
        old: req.body,
        userlogin
      },
      (err, contentView) => {
        if (err) {
          res.send(err.message);
          return;
        }
        res.render("partials/dashboard", {
          views: contentView,
          userlogin,
        });
      }
    );
  }
};
