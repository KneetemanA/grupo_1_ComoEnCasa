'use strict';
const orderJson=require("../orders.json")
const productsJSON =require("../productos.json")

const orderProductsMapped = orderJson.map((ord) => {
  const productMapped = ord.products.map((productinjson) => {
    const productFind = productsJSON.find((productDB) => {
      return productDB.id === productinjson.id;
    });

    return {
     
      order_id: ord.id,
      product_id: productFind ? productFind.id : null,
      quantity: productinjson.quantity
    };
  });

  return productMapped
 
}).flat(1);




/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('OrderProducts', orderProductsMapped, {});
  
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('OrderProducts', null, {});
     
  }
};
