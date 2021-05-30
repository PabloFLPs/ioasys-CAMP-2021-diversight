const express = require('express');
const cors = require("cors");

const app = express();

require('./app/database');

const routes = require('./routes');

app.use(express.json());

app.use(cors()); //enabling CORS use by application

app.use(routes);

/*
app.get('/', (req, res) => {
  res.send("App Running on Port 3000!");
  //res.json({ message: 'App Running on Port 3000!' });
});
*/

//app.listen(3000);

//Heroku da "assign" na porta dinamicamente, entao nao podemos deixar uma porta como "padrao", a ser usada por nossa API.
//Heroku assigns port dynamically , so, we cant let a specific port as pattern, to be used by our API.
app.listen(process.env.PORT || 3000)