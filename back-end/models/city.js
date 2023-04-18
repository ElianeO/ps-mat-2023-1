'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Customer, {
        foreignKey: 'city_id', // Campo da tabela estrangeira
        sourceKey: 'id', // Campo da tabela local
        as: 'customers' // Nome do campo de associação (plural)
      })
    }
  }
  City.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(2)
    }
    },{
    sequelize,
    modelName: 'City',
    tableName: 'cities'
  });
  return City;
};