const { loadData } = require("../../database");
const db = require("../../database/models");

module.exports = (req, res) => {
  const datos= loadData('productos')
  const datosHamb = datos.filter(p => p.category === "Hamburguesas") //PARA FILTRAR AUN SE SIGUE USANDO EL JSON, FALTA MIGRACIONES
  const userlogueado = req.session.user;
  db.Product.findAll({
    limit:12
  })
  .then((products) => {
    res.render("home", { datosProductos: products,datosHamb, userlogueado });
  });
};
