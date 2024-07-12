const db = require("../../database/models");
const { Op } = require("sequelize");

module.exports = async function (req, res) {
    const userlogueado = req.session.user;
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
  
    res.render('error404', {
      userlogueado: userlogueado,
      productsCart: productsCart
    });
  };
  