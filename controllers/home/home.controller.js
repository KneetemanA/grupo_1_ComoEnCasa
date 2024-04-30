
const db = require("../../database/models");

module.exports = (req, res) => {
  
  
  
  const userlogueado = req.session.user;

  db.Product.findAll()
  .then((products) => {
   const datoProductos = products.slice(0, 12)
    const datosHamb = products.filter(p => p.category_id === 3)
    res.render("home", { datosProductos: datoProductos,datosHamb, userlogueado });
    
  });
};
