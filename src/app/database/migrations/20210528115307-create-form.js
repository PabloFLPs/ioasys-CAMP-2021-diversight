'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('forms',
      {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      questoes: {
        type: Sequelize.JSONB,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATEONLY,
        allowNull: false
      }

    });
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('forms');
  }
};
