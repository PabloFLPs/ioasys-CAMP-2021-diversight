const Dashboard = require('../models/Dashboard');

class DashboardController{
  async store(req, res){
    const dashboard = await Dashboard.create(req.body);

    return res.json(dashboard);
  }

  async list(req, res){
    const body = req.body;
    const dashboard = await Dashboard.findAll({ where: { empresa: body.empresa } });

    if(!dashboard.length){
      return res.json({ message: "A empresa especificada nao possui dashboards cadastrados." });
    }

    return res.json(dashboard);
  }

  async index(req, res){
    const dashboards = await Dashboard.findAll();

    return res.json(dashboards);
  }
}

module.exports = new DashboardController();
