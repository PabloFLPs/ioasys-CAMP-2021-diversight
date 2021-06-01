const Sequelize = require('sequelize');

class Dashboard extends Sequelize.Model{
  static init(sequelize){
    super.init(
      {
        empresa: Sequelize.STRING,
        nps_cr_guia: Sequelize.STRING,
        nps_cr: Sequelize.ARRAY(Sequelize.INTEGER),
        nps_g_guia: Sequelize.STRING,
        nps_g: Sequelize.ARRAY(Sequelize.INTEGER),
        nps_o_guia: Sequelize.STRING,
        nps_o: Sequelize.ARRAY(Sequelize.INTEGER),
        nps_pcs_guia: Sequelize.STRING,
        nps_pcs: Sequelize.ARRAY(Sequelize.INTEGER),
        nps_geral_guia: Sequelize.STRING,
        nps_geral: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      {
        freezeTableName: true,
        tableName: 'dashboards',
        sequelize
      }
    );
    return this;
  }
}

module.exports = Dashboard;
