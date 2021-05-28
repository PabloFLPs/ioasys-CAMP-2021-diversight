const User = require('../models/User');
const bcrypt = require('bcrypt');

class UserController{
  async store(req, res){
    const {nome, cargo, empresa, email, senha} = req.body;
    const hash = await bcrypt.hash(senha, 10);

    const user = await User.create({nome, cargo, empresa, email, senha: hash});

    return res.json(user);
  }

  async login(req, res){
    const auth = req.body;
    const user = await User.findOne({ where: { email: auth.email } });

    if (user){
      const compare = await bcrypt.compare(user.senha, auth.senha);

      bcrypt.compare(auth.senha, user.senha, function(err, result){
        if (err){ //Handle Error
          return res.json({ message: "Ocorreu um Erro" });
        }
        if (result){ //Send JWT
          return res.json(user);
        }

        return res.json({ message: "Senha Incorreta" });
      });
    }
    else{
      return res.json({ message: "Usuario Nao Encontrado" });
    }
  }

  async index(req, res){
    const users = await User.findAll();

    return res.json(users);
  }
}

module.exports = new UserController();