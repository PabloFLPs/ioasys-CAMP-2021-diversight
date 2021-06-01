'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('respostas',
      {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      id_formulario: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      raca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orient_sex: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pcd: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pcd_visual: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pcd_fisica: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pcd_audicao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pcd_intelectual: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pcd_psicologica: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pcd_readaptado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      respostas: {
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
    
    return queryInterface.dropTable('respostas');
  }
};
