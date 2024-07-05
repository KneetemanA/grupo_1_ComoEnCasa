const getTotalOrder = (orders = []) => {
//   let total = 0;

//   data.forEach(({ price, orderProducts }) => {
    
//     orderProducts.forEach(({ quantity }) => 
// {
//       total += price * quantity;
//     });
//   });
//   return total;

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
