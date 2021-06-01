const Sequelize = require('sequelize');

const User = require('../models/User');
const RH = require('../models/RH');
const Colaborador = require('../models/Colaborador');
const Form = require('../models/Form');
const Resposta = require('../models/Resposta');
const Dashboard = require('../models/Dashboard');

const databaseConfig = require('../../config/database');

const models = [ User, RH, Colaborador, Form, Resposta, Dashboard];

class Database{
  constructor(){
    this.init();
  }

  init(){
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

module.exports = new Database();