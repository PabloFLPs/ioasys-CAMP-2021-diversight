const Sequelize = require('sequelize');

class Form extends Sequelize.Model{
  static init(sequelize){
    super.init(
      {
        tipo: Sequelize.STRING,
        questoes: Sequelize.JSON,
      },
      {
        freezeTableName: true,
        tableName: 'forms',
        sequelize
      }
    );
    return this;
  }
}

module.exports = Form;
