'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.supplier, {
        foreignKey: 'supplier_id',    // Nome do campo na tabela de ORIGEM
        targetKey: 'id',              // Nome do campo na tabela de DESTINO
        as: 'supplier'                // Nome do atributo para exibição
      })
    }
  }
  products.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    qunatity: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    unit: {
      type: DataTypes.ENUM,
      allowNull: false
    },
    supplier_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};