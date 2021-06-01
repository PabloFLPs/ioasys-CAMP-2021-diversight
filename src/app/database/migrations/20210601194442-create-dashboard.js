'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('dashboards',
      {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nps_cr_guia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nps_cr: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
      nps_g_guia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nps_g: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
      nps_o_guia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nps_o: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
      nps_pcs_guia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nps_pcs: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
      nps_geral_guia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nps_geral: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
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
    
    return queryInterface.dropTable('dashboards');
  }
};
