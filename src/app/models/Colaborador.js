const Sequelize = require('sequelize');

class Colaborador extends Sequelize.Model{
  static init(sequelize){
    super.init(
      {
        nome: Sequelize.STRING,
        raca: Sequelize.STRING,
        genero: Sequelize.STRING,
        orient_sex: Sequelize.STRING,
        data_nasc: Sequelize.DATEONLY,
        //PCD attributes block - START
        pcd: Sequelize.BOOLEAN,
        pcd_visual: Sequelize.BOOLEAN,
        pcd_fisica: Sequelize.BOOLEAN,
        pcd_audicao: Sequelize.BOOLEAN,
        pcd_intelectual: Sequelize.BOOLEAN,
        pcd_psicologica: Sequelize.BOOLEAN,
        pcd_readaptado: Sequelize.BOOLEAN,
        //PCD attributes block - END
        empresa: Sequelize.STRING,
        area_atuac: Sequelize.STRING,
        cargo: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.STRING
      },
      {
        freezeTableName: true,
        tableName: 'colaboradores',
        sequelize
      }
    );
    return this;
  }
}

module.exports = Colaborador;
