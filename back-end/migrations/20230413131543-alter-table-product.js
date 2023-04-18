'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('products', {
      fields: ['supplier_id'],    // Campo(s) da tabela de origem
      type: 'foreign key',
      // nome da chave estrangeira (dever ser único no BD)
      name: 'products_suppliers_fk',  
      references: {
        table: 'suppliers',      // Tabela estrangeira
        field: 'id'           // Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',    // Não deixa apagar uma customerem uso no customer
      onUpdate: 'CASCADE'      // Atualiza city_id em customer se id em customer mudar
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('products', 'products_id_suppliers_fk')
  }
};
