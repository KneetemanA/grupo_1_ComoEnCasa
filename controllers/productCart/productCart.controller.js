const fetch = require('node-fetch');
const server = "http://localhost:3030";

module.exports = async (req, res) => {
  try {
    const response = await fetch(`${server}/api/carrito`);
    const data = await response.json();
    res.render('productCart', {
      userlogueado: req.session.user,
      productsCart: data.products
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener el carrito");
  }
};