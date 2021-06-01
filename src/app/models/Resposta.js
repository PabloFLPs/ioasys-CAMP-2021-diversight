const Sequelize = require('sequelize');

class Resposta extends Sequelize.Model{
  static init(sequelize){
    super.init(
      {
        id_formulario: Sequelize.INTEGER,
        id_usuario: Sequelize.INTEGER,
        empresa: Sequelize.STRING,
        raca: Sequelize.STRING,
        genero: Sequelize.STRING,
        orient_sex: Sequelize.STRING,
        pcd: Sequelize.BOOLEAN,
        pcd_visual: Sequelize.BOOLEAN,
        pcd_fisica: Sequelize.BOOLEAN,
        pcd_audicao: Sequelize.BOOLEAN,
        pcd_intelectual: Sequelize.BOOLEAN,
        pcd_psicologica: Sequelize.BOOLEAN,
        pcd_readaptado: Sequelize.BOOLEAN,
        respostas: Sequelize.JSON,
      },
      {
        freezeTableName: true,
        tableName: 'respostas',
        sequelize
      }
    );
    return this;
  }
}

module.exports = Resposta;
