const Router = require("express");

const routes = new Router();

const UserController = require('./app/Controllers/UserController');

const port = 3000;

routes.get('/', (req, res) => {
  res.json({ message: `App Running on Port ${ port }!` });
});

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

module.exports = routes;