const db = require("../../database/models");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const userlogueado = req.session.user;
  const server = "http://localhost:3030";
  

try {
  const products = await db.Product.findAll();
  const datosProductos = products.slice(0, 12);
  const datosHamb = products.filter(p => p.category_id === 3);

  let productsCart = [];

  if (userlogueado) {
    const dataOrder = await db.Order.findOne({
      where: {
        [Op.and]: [
          {
            user_id: req.session.user?.id,
          },
          {
            state: "pending",
          },
        ],
      },
      include: [
        {
          association: "products",
          through: {
            attributes: ["quantity"],
          },
        },
      ],
    });

    if (dataOrder) {
      productsCart = dataOrder.products.map(product => {
        const quantity = product.OrderProduct ? product.OrderProduct.quantity : 0;
        
        return{
           ...product.toJSON(),
        quantity,
        }
      });
    }
  }

  res.render('home', {
    datosProductos: datosProductos,
    datosHamb: datosHamb,
    userlogueado: userlogueado,
    productsCart: productsCart,

  });
} catch (error) {
  console.error(error);
  res.status(500).send("Error al obtener los datos necesarios");
}
  

};
  
  // db.Product.findAll()
  // .then((products) => {
  //  const datoProductos = products.slice(0, 12)
  //   const datosHamb = products.filter(p => p.category_id === 3)
  //   res.render("home", { datosProductos: datoProductos,datosHamb, userlogueado });
    
  // });