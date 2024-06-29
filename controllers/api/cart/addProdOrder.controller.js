const { Op } = require("sequelize");
const db = require("../../../database/models");
const { getOrderPending } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { id: product_id } = req.params;

    if (!product_id) throw new Error("El id no encontrado");

    let [order] = await getOrderPending(req);

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

    let total = 0;
    order = order.products.forEach(
      ({
        price,
        orderProducts: {
          dataValues: { quantity },
        },
      }) => {
        const priceTotalProduct = price * quantity;
        total += priceTotalProduct;
      }
    );
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