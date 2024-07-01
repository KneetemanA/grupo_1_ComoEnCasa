const { Op } = require("sequelize");
const db = require("../../../database/models");
const { getOrderPending, getTotalOrder } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    let [order, isCreate] = await getOrderPending(req);

    const record = await db.OrderProduct.findOne({
      where: {
        [Op.and]: [
          {
            order_id: order.id,
          },
          {
            product_id: id,
          },
        ],
      },
    });

    if(record.quantity > 1){
      record.quantity--;
      await record.save();

      order = await order.reload({
        include: [
          {
            association: "product",
            through: {
              attributes: ["quantity"],
            },
          },
        ],
      });
      const total = getTotalOrder(order.product);
      order.total = total;
      await order.save();
    }
    
    res.status(200).json({
      ok: true,
      msg: "Cantidad descontada con éxito",
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: error.message,
    });
  }
};