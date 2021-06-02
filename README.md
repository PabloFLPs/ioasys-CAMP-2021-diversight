# Backend-Version

## Plataforma Diversight - Equipe META-EXPLOIT

Link da aplicacao no Heroku: https://heroku-diversight.herokuapp.com

Codigo referente ao backend da aplicacao Diversight, uma plataforma de "enterprise score", para fornecer dados personalizados de formularios que visam tabelar o quao "diverso" e inclusivo, e o ambiente de trabalho da empresa.

- Iniciando o projeto: ```yarn init -y```

Esse comando inicia o projeto com configuracoes padrao, utilizando o Yarn.

- Instalacao do Sequelize: ```yarn add express sequelize pg```

- Instalacao do Nodemon (auto-relod no "ctrl+s"): ```yarn add nodemon -D```

- Instalacao do CLI do Sequelize: ```yarn add sequelize-cli -D```

## Iniciando a configuracao do BD

- Instalacao do CLI do Sequelize: ```yarn add sequelize-cli -D```

- Abaixo segue os principais codigos para criacao de migrations e criacao de tabelas:
``` 
yarn sequelize init
yarn sequelize migration:create --name=create-user
yarn sequelize db:migrate
```

Esse ultimo comando ira dar erro, e preciso add a seguinte configuracao ao arquivo de database.js:
```
dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
```

Feito isso, habilitando a conexao SSL e resolvendo o bug de "unathorized certified" cm o "rejectUnauthorized: false", a criacao da tabela ocorrera sem problemas cm o ultimo comando.

- Adicionando o "bcrypt" para criptografar as senhas no BD: ```yarn add bcrypt```

- Adicionando o JWT para token de requisicoes Front/Mobile: ```yarn add jsonwebtoken```

## Heroku - Deployment
- Precisa do script "start" para rodar;
- Heroku altera dinamicamente a porta em que a aplicacao esta sendo executada: env port binding randonly ```app.listen(process.env.PORT || 3000);```
- Criar arquivo procfile (```web: node src/index.js```).

## Rotas da aplicacao no Heroku:
```
{
  "message": "App Running on Port 59555!",
  "routeListUsers": "/users (GET) -> lista usuarios",
  "routeRegisterUser": "/user_register (POST) -> registra usuario",
  "routeLoginUser": "/user_login (POST) -> login",
  "routeListRH": "/rh (GET) -> lista rh",
  "routeRegisterRH": "/rh_register (POST) -> registra rh",
  "routeLoginRH": "/rh_login (POST) -> login",
  "routeListColab": "/colabs (GET) -> lista colabs",
  "routeRegisterColab": "/colab_register (POST) -> registra colab",
  "routeLoginColab": "/colab_login (POST) -> login",
  "registerExample": "{nome: Giulia, cargo: 1, empresa: 3, email: giulia@ioasys.com, senha: admin}",
  "loginExample": "{email: marco@ioasys.com, senha: admin}",
  "routeRegisterForm": "/form_register (POST) -> registra form",
  "routeListForm": "/forms (GET) -> lista formularios",
  "routeListFrontend": "[GIULIA] -- /list_colabs (POST) -> lista colaboradores {nome, cargo} filtrados pela empresa {empresa}",
  "routeDataUserMobile": "[OTAVIO] -- /user_data (POST) -> lista os dados dos colaboradores {empresa, raca, genero, orient_sex, pcd, pcd_visual, pcd_fisica, pcd_audicao, pcd_intelectual, pcd_psicologica, pcd_readaptado} filtrados pelo id de usuario {id}",
  "routeRespostaRegister": "/resposta_register (POST) -> registra as respostas de um formulario",
  "routeRespostaList": "/respostas (GET) -> lista todas as respostas de formularios",
  "routeUserUpdate": "/user_update (POST) -> atualiza dados {nome, raca, genero, orient_sex, pcd, data_nasc, empresa, area_atuac, cargo} do usuario, filtrado pelo id {id}",
  "routeRegisterDashboard": "/dashboard_register (POST) -> registra dashboard de empresa {empresa, NPS_CR_Guia, NPS_CR, NPS_G_Guia, NPS_G, NPS_O_Guia, NPS_O, NPS_PCS_Guia, NPS_PCS, NPS_Geral_Guia, NPS_Geral}",
  "routeFilterDashboard": "/dashboard_filter (POST) -> filtra e mostra dashboard por empresa {empresa}",
  "routeListDashboard": "/dashboard (GET) -> lista dashboards"
}
```
