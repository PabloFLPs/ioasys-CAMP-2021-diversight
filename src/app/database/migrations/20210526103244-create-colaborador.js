'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('colaboradores',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      raca: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      genero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      orient_sex: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_nasc: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      pcd: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      empresa: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      area_atuac: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cargo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    
    });
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('colaboradores');
  }
};
