'use strict';
const ordersJson=require("../orders.json");
const ordersMapped = ordersJson.map((o=>{
  return {
    state: o.state,
    subtotal: o.subtotal,
    total: o.total,
    user_id: o.user_id
  }
}))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     
    await queryInterface.bulkInsert('Orders', ordersMapped, {});
   
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Orders', null, {});
    
  }
}
;
