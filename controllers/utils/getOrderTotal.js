const getTotalOrder = (data = []) => {
  return data.reduce(
    (
      acum,
      {
        price,
        OrderProducts: {
          dataValues: { quantity },
        },
      }
    ) => {
      acum += price * quantity;
      return acum;
    },
    0
  );
};

const getTotalOrderV2 = (data = []) => {
  let total = 0;
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

module.exports = { getTotalOrder, getTotalOrderV2 };