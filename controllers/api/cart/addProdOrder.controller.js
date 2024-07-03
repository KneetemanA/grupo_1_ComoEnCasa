const { Op } = require("sequelize");
const db = require("../../../database/models");
const { getOrderPending,  } = require("../../utils");
const { getTotalOrder } = require("../../utils/getOrderTotal");

module.exports = async (req, res) => {
  try {
    const { id: product_id } = req.params;

    if (!product_id) throw new Error("El id no fue recibido");

    let [order, isCreate] = await getOrderPending(req);

    await db.OrderProduct.create({
      order_id: order.id,
      product_id,
    });

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

    res.status(201).json({
      ok: true,
      msg: "Producto agregado al carrito con éxito",
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err.message,
    });
  }
};