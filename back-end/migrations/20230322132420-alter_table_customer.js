'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('customer_tags', {
      fields: ['customer_id'],    // Campo(s) da tabela de origem
      type: 'foreign key',
      // nome da chave estrangeira (dever ser único no BD)
      name: 'customer_tag_tags_fk',  
      references: {
        table: 'customers',      // Tabela estrangeira
        field: 'id'           // Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',    // Não deixa apagar uma customerem uso no customer
      onUpdate: 'CASCADE'      // Atualiza city_id em customer se id em customer mudar
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('customer_tags', 'customer_tags_tags_fk')
    await queryInterface.removeConstraint('customer_tags', 'customer_tags_costumers_fk')
  }
};
