const Sequelize = require('sequelize');

class RH extends Sequelize.Model{
  static init(sequelize){
    super.init(
      {
        nome: Sequelize.STRING,
        cargo: Sequelize.STRING,
        empresa: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.STRING
      },
      {
        freezeTableName: true,
        tableName: 'rh',
        sequelize
      }
    );
    return this;
  }
}

module.exports = RH;
