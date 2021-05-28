const Router = require("express");

const routes = new Router();
const port = 3000;

//Teste Cadastro Usuarios
const UserController = require('./app/Controllers/UserController.js');

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

//Teste Login Usuarios
routes.post('/login', UserController.login);

//Cadastro RH e Colaborador
const RHController = require('./app/Controllers/RHController');
const ColaboradorController = require('./app/Controllers/ColaboradorController');

routes.post('/rh_signin', RHController.store);
routes.get('/rh_signin', RHController.index);
routes.post('/colaborador_signin', ColaboradorController.store);
routes.get('/colaborador_signin', ColaboradorController.index);

//Teste Cadastro Form
const FormController = require("./app/Controllers/FormController.js");

routes.post('/forms', FormController.store);
routes.get('/forms', FormController.index);

//Rota padrao para testar aplicacao
routes.get('/', (req, res) => {
  res.json({ 
    routeListUsers: "/users (GET) -> lista usuarios",
    routeRegisterUser: "/users (POST) -> registra usuario",
    routeLoginUser: "/login -> login",
    registerExample: "{nome: Giulia,cargo: 1,empresa: 3,email: giulia@ioasys.com,senha: admin}",
    loginExample: "{email: marco@ioasys.com,senha: admin}"
  });
});

/*
routes.get('/', (req, res) => {
  res.json({message: `App Running on Port ${ port }!`});
});
*/

module.exports = routes;
