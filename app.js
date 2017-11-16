const express = require('express');
const Utils = require('./utils');

const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {color: Utils.favoriteColor});
});

app.get('/people', (req, res) => {
  const people = Utils.getPeople();
  res.render('people', {people: people});
});

app.listen(3000);
