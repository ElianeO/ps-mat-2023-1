'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('order_tags', {
      fields: ['order_id'],    // Campo(s) da tabela de origem
      type: 'foreign key',
      // nome da chave estrangeira (dever ser único no BD)
      name: 'order_tags_customers_fk',  
      references: {
        table: 'orders',      // Tabela estrangeira
        field: 'id'              // Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',    // Não deixa apagar uma customer em uso no order_tags
      onUpdate: 'CASCADE'      // Atualiza order_id em order_tags se id em orders mudar
    })

    await queryInterface.addConstraint('order_tags', {
      fields: ['tag_id'],    // Campo(s) da tabela de origem
      type: 'foreign key',
      // nome da chave estrangeira (dever ser único no BD)
      name: 'order_tags_tags_fk',  
      references: {
        table: 'tags',            // Tabela estrangeira
        field: 'id'               // Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',    // Não deixa apagar uma tag em uso no customer_tags
      onUpdate: 'CASCADE'      // Atualiza tag_id em customer_tags se id em tags mudar
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('order_tags', 'order_tags_tags_fk')
    await queryInterface.removeConstraint('order_tags', 'order_tags_order_fk')
  }
};