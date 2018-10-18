const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

require('dotenv').config();
const app = express();
const port = 3000;

var formParser = bodyParser.urlencoded({ extended: true });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  operatorsAliases: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('mySQL Connection established!');
  })
  .catch((err) => {
    console.error('mySQL DB connection error:', err);
  });

app.use(express.static(__dirname + '/public'));

app.post('/f1', formParser, (req, res) => {
  console.log('/f1 req.body: ', req.body);
  res.send('/f1 received');
});

app.post('/f2', formParser, (req, res) => {
  console.log('/f2 req: ', req.body);
  res.send('/f2 received');
});

app.post('/f3', formParser, (req, res) => {
  console.log('/f3 req: ', req.body);
  res.send('/f3 received');
});

app.listen(port, () => {
  console.log('Express listening at: http://localhost:' + port);
});