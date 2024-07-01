const db = require("../../../database/models");
const { getOrderPending } = require("../../utils");

module.exports = async (req, res) => {
  const [order] = await getOrderPending(req);

  try {
    await db.OrderProduct.destroy({
      where: {
        order_id: order.id,
      },
    });

    order.total = 0;
    await order.save();

    res.status(200).json({
      ok: true,
      msg: "Productos eliminados con éxito",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: error.message,
    });
  }
};