const getTotalOrder = (data = []) => {
    let total = 0;
    data.forEach(
      ({
        price,
        orderproduct: {
          dataValues: { quantity },
        },
      }) => {
        total += price * quantity;
      }
    );
    return total;
};


module.exports = { getTotalOrder };