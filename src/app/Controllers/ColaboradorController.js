const Colaborador = require('../models/Colaborador');
const bcrypt = require('bcrypt');

class ColaboradorController{
  async store(req, res){
    const {nome, raca, genero, orient_sex, data_nasc, pcd, pcd_visual, pcd_fisica, pcd_audicao, pcd_intelectual, pcd_psicologica, pcd_readaptado, empresa, area_atuac, cargo, email, senha} = req.body;
    const hash = await bcrypt.hash(senha, 10);

    const colaborador = await Colaborador.create({nome, raca, genero, orient_sex, data_nasc, pcd, pcd_visual, pcd_fisica, pcd_audicao, pcd_intelectual, pcd_psicologica, pcd_readaptado, empresa, area_atuac, cargo, email, senha: hash});

    return res.json(colaborador);
  }

  async login(req, res){
    const auth = req.body;
    const user = await Colaborador.findOne({ where: { email: auth.email } });

    if (user){
      //const compare = await bcrypt.compare(user.senha, auth.senha);

      await bcrypt.compare(auth.senha, user.senha, function(err, result){
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
      return res.json({ message: "Colaborador Nao Encontrado" });
    }
  }

  async list(req, res){
    const body = req.body;
    const colaboradores = await Colaborador.findAll({ attributes:  ['nome', 'cargo'], where: { empresa: body.empresa } });

    if(!colaboradores.length){
      return res.json({ message: "A empresa especificada nao possui usuarios cadastrados." });
    }

    return res.json(colaboradores);
  }

  async userData(req, res){
    const body = req.body;
    const data = await Colaborador.findAll({ attributes:  ['id', 'empresa', 'raca', 'genero', 'orient_sex', 'pcd', 'pcd_visual', 'pcd_fisica', 'pcd_audicao', 'pcd_intelectual', 'pcd_psicologica', 'pcd_readaptado'], where: { id: body.id_usuario } });

    if(!data.length){
      return res.json({ message: "A empresa especificada nao possui usuarios cadastrados." });
    }

    return res.json(data);
  }

  async userUpdate(req, res){
    const user_id = req.body.id;
    const user = await Colaborador.findOne({ where: { id: user_id } });

    const new_user = await user.update(req.body);;
    
    return res.json(new_user);
  }

  async index(req, res){
    const colaboradores = await Colaborador.findAll();

    return res.json(colaboradores);
  }
}

module.exports = new ColaboradorController();

/*
Model.findAll({
  attributes: ['foo', 'bar']
});
*/

/*
const jane = await User.create({ name: "Jane" });
console.log(jane.name); // "Jane"
jane.name = "Ada";
// the name is still "Jane" in the database
await jane.save();
// Now the name was updated to "Ada" in the database!

console.log(cody.age) // 7
cody = await cody.update({age: 8})
console.log(cody.age) // 8
*/