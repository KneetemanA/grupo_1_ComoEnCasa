const sequelizePaginate = require('sequelize-paginate');

'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order,{
        foreignKey:"user_id",
        as:"order"
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    user: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    imageProfile: DataTypes.STRING,
    tic: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps:false
  });
  
  sequelizePaginate.paginate(User)
  return User;
};