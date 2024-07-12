const db = require("../../database/models");
const { Op } = require('sequelize')

async function getProductsCart(req){
  
  let productsCart = [];
  if (req.session && req.session.user) {
    const dataOrder = await db.Order.findOne({
      where: {
        [Op.and]: [
          {
            user_id: req.session.user.id,
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
  
  return productsCart;
}
}

module.exports = async (req, res) => {

  const userlogueado = req.session.user;

  let productsCart = [];
  if (userlogueado) {
    productsCart = await getProductsCart(req);
  }

  db.Product.findAll({
    include: [{ association: "categorias" }],
  
  }).then((productos) => {
    res.render("listProducts", { productos, userlogueado, productsCart });
    
  });
  
};
