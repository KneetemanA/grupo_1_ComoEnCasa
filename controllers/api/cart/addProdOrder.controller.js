const { Op } = require("sequelize");
const db = require("../../../database/models");
const { getOrderPending, getTotalOrder } = require("../../utils");

module.exports = async (req, res) => {
  try {
    const { id: product_id } = req.params;
    if (!product_id) throw new Error("El id no fue recibido");

    let [order, isCreate] = await getOrderPending(req);

    let orderProduct = await db.OrderProduct.findOne({
      where: {
        [Op.and]: 
        [{ order_id: order.id }, 
          { product_id }]
      }
    });

    if (orderProduct) {
    
      orderProduct.quantity++;
      await orderProduct.save();
    
    } else {
    
      await db.OrderProduct.create({ 
        order_id: order.id, 
        product_id, 
        quantity: 1 });
    }

    order = await order.reload({
      include: [
        { 
          association: "products", 
          through: { attributes: ["quantity"] } }
      ]
    });

    const total = getTotalOrder(order.products);
    order.total = total;
    await order.save();

    res.status(201).json({ 
      ok: true, 
      total, 
      msg: "Producto agregado al carrito con éxito" });
  } catch (err) {
    res.status(500).json({ 
      ok: false, 
      total, 
      msg: err.message });
  }
};
