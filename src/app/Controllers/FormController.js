const Form = require('../models/Form');

class FormController{
  async store(req, res){
    const form = await Form.create(req.body);

    return res.json(form);
  }

  async index(req, res){
    const forms = await Form.findAll();

    return res.json(forms);
  }
}

module.exports = new FormController();