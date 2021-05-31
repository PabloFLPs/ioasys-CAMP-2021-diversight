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
        type: Sequelize.STRING,
        allowNull: false
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orient_sex: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_nasc: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      //PCD attributes block - START
      pcd: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      pcd_visual: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      pcd_fisica: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      pcd_audicao: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      pcd_intelectual: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      pcd_psicologica: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      pcd_readaptado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      //PCD attributes block - END
      empresa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      area_atuac: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cargo: {
        type: Sequelize.STRING,
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
