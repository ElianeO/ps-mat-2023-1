'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.City, {
        foreignKey: 'city_id',    // Nome do campo na tabela de ORIGEM
        targetKey: 'id',          // Nome do campo na tabela de DESTINO
        as: 'city'                // Nome do atributo para exibição
      })
      // this.hasMany(models.CustomerTag, {
      //   foreignKey: 'customer_id', // Campo da tabela estrangeira
      //   sourceKey: 'id', //Campo da tabela local
      //   as: 'tags' //Nome do campo de associação
      // })
      this.belongsToMany(models.Tag, {
        through: 'customer_tags',  // Tabela intermediária
        foreignKey: 'customer_id', // Chave estrangeira da tabela intermediária
        otherKey: 'tag_id',        // Outra chave da tabela intermediária
        as: 'tags'                 // Nome do campo de associação
      })
    }
  }
  Customer.init({
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
    adress: {
      type: DataTypes.TEXT
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING(20)
    },
    is_whatsapp: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
    },{
    sequelize,
    modelName: 'Customer',
    tableName: 'customers'
  });
  return Customer;
};