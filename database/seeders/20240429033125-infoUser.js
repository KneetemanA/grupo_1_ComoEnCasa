'use strict';
const infoUserJSON = require("../infoUser.json")
const usersJSON = require("../users.json")
const infoUserDBMapped = infoUserJSON.map((i =>{
  const uuuuu = usersJSON.find((u=> i.id === u.id))
  return {
    phone: i.phone, 
    province: i.province,
    city: i.city,
    street: i.street,
    num:  i.num,
    user_id: uuuuu? uuuuu.id : null
  }
}))
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('infousers', infoUserDBMapped, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('infousers', null, {});
  }
};
