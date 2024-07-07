'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.Product, { 
        through: 'OrderProduct',
        foreignKey: 'order_id',
        otherKey: 'product_id',
        as:"products"
      })  
      Order.belongsTo(models.User,{
        foreignKey:"user_id",
        as:"user"
      })
      Order.hasMany(models.OrderProduct,{
        foreignKey:"order_id",
        as:"orderProducts"
      })
    }
    
  }
  Order.init({
    state: {
      type: DataTypes.STRING,
      validate: {
        isInt: {
          args: [["completed", "pending", "canceled"]],
          msg: "Valores validos para la orden 'completed', 'pending' o 'canceled'",
        },
      },
      defaultValue: "pending"
    },
    subtotal: DataTypes.DECIMAL,
    total: {
      type: DataTypes.DECIMAL,
      defaultValue: 0},
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
    underscored: false,
    createdAt: "created_at",
    updatedAt:"updated_at"
  });

  return Order;
};