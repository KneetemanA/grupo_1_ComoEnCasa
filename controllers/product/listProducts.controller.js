const db = require("../../database/models");

module.exports = (req, res) => {
  const userlogueado = req.session.user;

 
  db.Product.findAll({
    include: [{ association: "categorias" }],
  }).then((productos) => {
    res.render("listProducts", { productos, userlogueado });
    
  });
};
