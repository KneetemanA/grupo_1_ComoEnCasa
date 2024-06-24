const { Op } = require("sequelize");
const db = require("../../../database/models");
const { getOrderPending } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { id: productId } = req.params;

    if (!productId) throw new Error("El id no fue recibido");

    const [order, isCreate] = await getOrderPending(req);

    await db.OrderProduct.destroy({
      where: {
        orderId: order.id,
        productId,
      },
    });

    res.status(200).json({
      ok: true,
      msg: "Producto eliminado del carrito con éxito",
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err.message,
    });
  }

};