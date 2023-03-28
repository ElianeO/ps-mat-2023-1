'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('order_rel_statuses', {
      fields: ['order_id'],    // Campo(s) da tabela de origem
      type: 'foreign key',
      // nome da chave estrangeira (dever ser único no BD)
      name: 'order_id__orders_fk',  
      references: {
        table: 'orders',      // Tabela estrangeira
        field: 'id'              // Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',    // Não deixa apagar uma customer em uso no order_tags
      onUpdate: 'CASCADE'      // Atualiza order_id em order_tags se id em orders mudar
    })

    await queryInterface.addConstraint('order_rel_statuses', {
      fields: ['oder_status_id'],    // Campo(s) da tabela de origem
      type: 'foreign key',
      // nome da chave estrangeira (dever ser único no BD)
      name: 'order_rel_status_statuses_fk',  
      references: {
        table: 'order_status',            // Tabela estrangeira
        field: 'id'               // Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',    // Não deixa apagar uma tag em uso no customer_tags
      onUpdate: 'CASCADE'      // Atualiza tag_id em customer_tags se id em tags mudar
    })
    await queryInterface.addConstraint('order_rel_statuses', {
      fields: ['user_id'],    // Campo(s) da tabela de origem
      type: 'foreign key',
      // nome da chave estrangeira (dever ser único no BD)
      name: 'user_id_users_fk',  
      references: {
        table: 'user',            // Tabela estrangeira
        field: 'id'               // Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',    // Não deixa apagar uma tag em uso no customer_tags
      onUpdate: 'CASCADE'      // Atualiza tag_id em customer_tags se id em tags mudar
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('order_rel_statuses', 'order_id__orders_fk')
    await queryInterface.removeConstraint('order_rel_statuses', 'order_rel_status_statuses_fk')
    await queryInterface.removeConstraint('order_rel_statuses', 'user_id_users_fk')
  }
};