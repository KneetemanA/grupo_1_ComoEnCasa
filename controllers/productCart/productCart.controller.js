const fetch = require('node-fetch');
const server = "http://localhost:3030";
const db = require("../../database/models");
const { Op } = require("sequelize");


module.exports = async (req, res) => {
  let productsCart = [];
  
  try {
    const userlogueado = req.session.user

    if (userlogueado){
      const dataOrder = await db.Order.findOne({
        where: {
          [Op.and]: [
            { user_id: req.session.user },
            { state: "pending" }
          ]
        },
        include: [
          {
            association: "products",
            through: { attributes: ["quantity"] }
          }
        ]
      });

      if (dataOrder) {
        productsCart = dataOrder.products.map(product => {
          const quantity = product.OrderProduct ? product.OrderProduct.quantity : 0;
          return {
            ...product.toJSON(),
            quantity
          };
        });
      }
    } else {
     
      const response = await fetch(`${server}/api/carrito`);
      const data = await response.json();
      productsCart = data.products;
    }

    res.render('productCart', {
      userlogueado: req.session.user,
      productsCart
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener el carrito");
  }
}
