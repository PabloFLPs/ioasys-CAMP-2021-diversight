const Colaborador = require('../models/Colaborador');
const bcrypt = require('bcrypt');

class ColaboradorController{
  async store(req, res){
    const {nome, raca, genero, orient_sex, data_nasc, PCD, empresa, area_atuac, cargo, email, senha} = req.body;
    const hash = await bcrypt.hash(senha, 10);

    const colaborador = await Colaborador.create({nome, raca, genero, orient_sex, data_nasc, PCD, empresa, area_atuac, cargo, email, senha: hash});

    return res.json(colaborador);
  }

  async index(req, res){
    const colaboradores = await Colaborador.findAll();

    return res.json(colaboradores);
  }
}

module.exports = new ColaboradorController();