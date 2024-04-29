'use strict';
const productsJSON = require("../productos.json")
const categoryJSON = require("../category.json")
const productsDBMapped = productsJSON.map((p=>{
  const categorias = categoryJSON.find((c=> c.name === p.category))
  return {
      name: p.name,
      price: p.price,
      discount: p.discount? p.discount : 0 ,
      free_shipping: p.freeShipping,
      image: p.image,
      detail: p.detail,
      category_id: categorias? categorias.id : null
  }
}))
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('products',productsDBMapped , {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
