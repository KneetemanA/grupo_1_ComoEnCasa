const sequelizePaginate = require('sequelize-paginate')

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class infoUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      infoUser.belongsTo(models.User, {
        as: "users",
        foreignKey: "user_id",
      });
    }
  }
  infoUser.init({
    phone: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    num: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'infoUser',
    tableName: 'infousers',
    timestamps:false,
    underscored: true
  });

  sequelizePaginate.paginate(infoUser);
  return infoUser;
};