const getTotalOrder = (data = []) => {
    let total = 1;
    data.forEach(
      ({
        price,
        OrderProducts: {
          dataValues: { quantity },
        },
      }) => {
        total += price * quantity;
      }
    );
    return total;
};


module.exports = { getTotalOrder };