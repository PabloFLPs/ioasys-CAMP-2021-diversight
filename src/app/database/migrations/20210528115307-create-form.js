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
      questao1: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      questao2: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      questao3: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      questao4: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      questao5: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      questao6: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      questao7: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      questao8: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      questao9: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      questao10: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    
    });
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('forms');
  }
};
