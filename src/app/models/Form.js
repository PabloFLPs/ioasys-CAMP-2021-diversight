const Sequelize = require('sequelize');

class Form extends Sequelize.Model{
  static init(sequelize){
    super.init(
      {
        questao1: Sequelize.INTEGER,
        questao2: Sequelize.INTEGER,
        questao3: Sequelize.INTEGER,
        questao4: Sequelize.INTEGER,
        questao5: Sequelize.INTEGER,
        questao6: Sequelize.INTEGER,
        questao7: Sequelize.INTEGER,
        questao8: Sequelize.INTEGER,
        questao9: Sequelize.INTEGER,
        questao10: Sequelize.INTEGER
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
