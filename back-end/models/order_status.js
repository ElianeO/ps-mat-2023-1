'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order_status.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    sequence: {
      allowNull: false,
      type: DataTypes.SMALLINT
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(30)
    }
    }, {
    sequelize,
    modelName: 'OrderStatus',
    tableName: 'order_statuses'
  });
  return order_status;
};