const express = require('express');
const mysql = require('mysql');

const app = express()
var port = process.env.PORT || 3000;



// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})

const parts = require('./controllers/parts');
app.get('/getParts', (req, res) => {
  parts.getAll((list) => {
    res.render('parts.ejs', { all: list });
  });
})

const credit = require('./controllers/credit');
const res = require('express/lib/response');
app.get('/processCC', (req, res) => {
  credit.processSample((result) => {
    res.render('credit.ejs', { data: result });
  });
})

app.get('/orders', (req, res) => {
  res.render('orders.ejs');
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})
