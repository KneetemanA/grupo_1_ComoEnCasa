const getTotalOrder = (data = []) => {
  let total = 0;
  data.forEach(({ price, OrderProducts }) => {
    OrderProducts.forEach(({ quantity }) => {
      total += price * quantity;
    });
  });
  return total;
};
module.exports = { getTotalOrder };
