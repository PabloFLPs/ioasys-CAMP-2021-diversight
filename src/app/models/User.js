const Sequelize = require('sequelize');

class User extends Sequelize.Model{
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
        tableName: 'users',
        sequelize
      }
    );
    return this;
  }
}

module.exports = User;
