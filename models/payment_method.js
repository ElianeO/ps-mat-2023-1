'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentMethod.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    operator_fee: {
      type: DataTypes.DECIMAL
    }
    }, {
    sequelize,
    modelName: 'payment_method',
    tableName: 'payment_method'
  });
  return PaymentMethod;
};