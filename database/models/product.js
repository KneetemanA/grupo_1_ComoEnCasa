const sequelizePaginate = require('sequelize-paginate');

'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        as: "categorias",
        foreignKey: "category_id"
      })
      Product.belongsToMany(models.Order, {
        through: "OrderProducts",
        as: "orders",
        foreignKey: "product_id",
        otherKey: "order_id"

      })

    }
  }
  
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    discount: DataTypes.INTEGER,
    free_shipping: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    detail: DataTypes.TEXT,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false
  });

  sequelizePaginate.paginate(Product);
  return Product;
};
