const express = require('express');

const app = express();

require('./app/database');

const routes = require('./routes');

app.use(express.json());

app.use(routes);

/*
app.get('/', (req, res) => {
  res.send("App Running on Port 3000!");
  //res.json({ message: 'App Running on Port 3000!' });
});
*/

app.listen(3000);