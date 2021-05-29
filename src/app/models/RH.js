const Sequelize = require('sequelize');

class RH extends Sequelize.Model{
  static init(sequelize){
    super.init(
      {
        nome: Sequelize.STRING,
        cargo: Sequelize.INTEGER,
        empresa: Sequelize.INTEGER,
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
