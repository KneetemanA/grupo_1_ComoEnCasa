'use strict';
const usersJSON = require("../users.json")
const usersDBMapped = usersJSON.map((u=>{
  return {
      name: u.name,
      user: u.user,
      email: u.email,
      password: u.password,
      imageProfile: u.image? u.image : "default.jpg" ,
      tic: u.tic,
      role: u.role
  }
}))
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users',usersDBMapped , {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});
     
  }
};
