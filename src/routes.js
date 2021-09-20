const Router = require("express");

const routes = new Router();
const port = 3000;

//Teste Cadastro Usuarios //////////////////////////////////////////////////////////////////////
const UserController = require('./app/Controllers/UserController.js');

routes.post('/user_register', UserController.store);
routes.get('/users', UserController.index);

//Teste Login Usuarios
routes.post('/user_login', UserController.login);

//Cadastro RH e Colaborador ////////////////////////////////////////////////////////////////////
const RHController = require('./app/Controllers/RHController');
const ColaboradorController = require('./app/Controllers/ColaboradorController');

routes.post('/rh_register', RHController.store);
routes.get('/rh', RHController.index);
routes.post('/colab_register', ColaboradorController.store);
routes.get('/colabs', ColaboradorController.index);

//Login RH e Colaborador ///////////////////////////////////////////////////////////////////////
routes.post('/rh_login', RHController.login);
routes.post('/colab_login', ColaboradorController.login);

//Teste Cadastro Form //////////////////////////////////////////////////////////////////////////
const FormController = require('./app/Controllers/FormController.js');

routes.post('/form_register', FormController.store);
routes.get('/forms', FormController.index);

//Listagem Frontend
//routes.post('/list_rh', RHController.list);
routes.post('/list_colabs', ColaboradorController.list);

//User Data
routes.post('/user_data', ColaboradorController.userData);

//Registro Respostas
const RespostaController = require('./app/Controllers/RespostaController.js');
const DashboardController = require("./app/Controllers/DashboardController.js");

routes.post('/resposta_register', RespostaController.store);
routes.get('/respostas', RespostaController.index);

//Update Data User
routes.post('/user_update', ColaboradorController.userUpdate);

//Dashboard
routes.post('/dashboard_register', DashboardController.store);
routes.post('/dashboard_filter', DashboardController.list);
routes.get('/dashboard', DashboardController.index);

//Rota padrao para testar aplicacao ////////////////////////////////////////////////////////////
routes.get('/', (req, res) => {
  res.json({ 
    message: `App Running on Port ${ process.env.PORT || port}!`,
    routeListUsers: "/users (GET) -> list all users",
    routeRegisterUser: "/user_register (POST) -> register a user",
    routeLoginUser: "/user_login (POST) -> user login",
    routeListRH: "/rh (GET) -> list RH members",
    routeRegisterRH: "/rh_register (POST) -> register RH member",
    routeLoginRH: "/rh_login (POST) -> RH login",
    routeListColab: "/colabs (GET) -> list all collaborators",
    routeRegisterColab: "/colab_register (POST) -> register a collaborator",
    routeLoginColab: "/colab_login (POST) -> collaborator login",
    registerExample: "{name: Name, role: 1, company: 3, email: name@company.com, password: admin}",
    loginExample: "{email: name@company.com, password: admin}",
    routeRegisterForm: "/form_register (POST) -> register a form",
    routeListForm: "/forms (GET) -> list all forms",
    routeListFrontend: "/list_colabs (POST) -> list all collaborators {name, role} filtered by company {company}",
    routeDataUserMobile: "/user_data (POST) -> list all user data {empresa, raca, genero, orient_sex, pcd, pcd_visual, pcd_fisica, pcd_audicao, pcd_intelectual, pcd_psicologica, pcd_readaptado} filtered by user id {id}",
    routeRespostaRegister: "/resposta_register (POST) -> register answers",
    routeRespostaList: "/respostas (GET) -> list all forms entries",
    routeUserUpdate: "/user_update (POST) -> user data update {nome, raca, genero, orient_sex, pcd, data_nasc, empresa, area_atuac, cargo} filtered by user id {id}",
    routeRegisterDashboard: "/dashboard_register (POST) -> register company dashboard {empresa, NPS_CR_Guia, NPS_CR, NPS_G_Guia, NPS_G, NPS_O_Guia, NPS_O, NPS_PCS_Guia, NPS_PCS, NPS_Geral_Guia, NPS_Geral}",
    routeFilterDashboard: "/dashboard_filter (POST) -> filter and show dashboards by company {company}",
    routeListDashboard: "/dashboard (GET) -> list all dashboards"
  });
});

/*
routes.get('/', (req, res) => {
  res.json({message: `App Running on Port ${ process.env.PORT }!`});
});
*/

module.exports = routes;
