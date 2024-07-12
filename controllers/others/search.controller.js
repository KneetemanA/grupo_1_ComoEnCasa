const DB = require("../../database/models");
const { Op } = DB.Sequelize;

module.exports = async function(req, res) {
    const userlogueado = req.session.user;

    let productsCart = [];

  if (userlogueado) {
    const dataOrder = await DB.Order.findOne({
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

    DB.Product.findAll({
        include: [{ association: "categorias" }],
        where: { 
            [Op.or]: [
                { name: { [Op.like]: "%" + req.query.productoBuscado + "%" } },
                { '$categorias.name$': { [Op.like]: "%" + req.query.productoBuscado + "%" } }
            ]
        }
    })
    .then(resultadosBusqueda => {
        res.render("search", { resultadosBusqueda, userlogueado, productsCart });
    })

    

}