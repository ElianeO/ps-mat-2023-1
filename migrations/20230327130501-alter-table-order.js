'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('order_tags', {
      fields: ['order_id'],    // Campo(s) da tabela de origem
      type: 'foreign key',
      // nome da chave estrangeira (dever ser único no BD)
      name: 'order_tag_tags_fk',  
      references: {
        table: 'orders',      // Tabela estrangeira
        field: 'id'           // Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',    // Não deixa apagar uma customerem uso no customer
      onUpdate: 'CASCADE'      // Atualiza city_id em customer se id em customer mudar
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('order_tags', 'order_tags_tags_fk')
    await queryInterface.removeConstraint('order_tags', 'order_tags_orders_fk')
  }
};
