const RH = require('../models/RH');
const bcrypt = require('bcrypt');

class RHController{
  async store(req, res){
    const {nome, cargo, empresa, email, senha} = req.body;
    const hash = await bcrypt.hash(senha, 10);

    const rh = await RH.create({nome, cargo, empresa, email, senha: hash});

    return res.json(rh);
  }

  async index(req, res){
    const rh = await RH.findAll();

    return res.json(rh);
  }
}

module.exports = new RHController();

/*
routes.post('/rh_signin', async (req, res) => {
  try{
    const {email,senha} = req.body;
    const hash = await bcrypt.hash(senha, 10);
    await db('rh').insert({email:email,hash:hash});
    res.status(200).json(Operação realizada com sucesso.);
  }catch(err){
    console.log(err);
    res.status(500).send("Não foi possível realizar a operação.")
  }
});
*/