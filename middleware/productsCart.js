// const fetch = require("node-fetch");

// async function productsCart (req, res, next) {
//   if (req.session.user) {
//     const server = "http://localhost:3030";
//     try {
//       const response = await fetch(`${server}/api/carrito`, {
//       });
//       const data = await response.json();
//       req.productsCart = data.products;
//     } catch (error) {
//       console.error(error);
//       req.productsCart = [];
//     }
//   } else {
//     req.productsCart = [];
//   }
//   next();
// }

// module.exports = productsCart;