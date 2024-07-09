const getTotalOrder = (orders = []) => {

const total = orders.map(order => {
  let total = 0;
  order.products.forEach(product => {
    const quantity = product.OrderProducts.quantity;
    total += product.price * quantity;
  });
  return {
    ...order.toJSON(),
    total,
  };
});

return total;

};

module.exports = { getTotalOrder };
