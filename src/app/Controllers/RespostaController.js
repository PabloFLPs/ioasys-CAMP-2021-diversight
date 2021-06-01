const Resposta = require('../models/Resposta');

class RespostaController{
  async store(req, res){
    const resposta = await Resposta.create(req.body);

    return res.json(resposta);
  }

  async index(req, res){
    const respostas = await Resposta.findAll();

    return res.json(respostas);
  }
}

module.exports = new RespostaController();
