const Sequelize = require('sequelize');

class Form extends Sequelize.Model{
  static init(sequelize){
    super.init(
      {
        tipo: Sequelize.STRING,
        questoes: Sequelize.JSON,
        created_at: Sequelize.DATEONLY,
        updated_at: Sequelize.DATEONLY
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
