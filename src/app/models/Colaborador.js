const Sequelize = require('sequelize');

class Colaborador extends Sequelize.Model{
  static init(sequelize){
    super.init(
      {
        nome: Sequelize.STRING,
        raca: Sequelize.INTEGER,
        genero: Sequelize.INTEGER,
        orient_sex: Sequelize.INTEGER,
        data_nasc: Sequelize.DATEONLY,
        pcd: Sequelize.INTEGER,
        empresa: Sequelize.INTEGER,
        area_atuac: Sequelize.INTEGER,
        cargo: Sequelize.INTEGER,
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
