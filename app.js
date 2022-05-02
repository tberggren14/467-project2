const express = require('express');
const mysql = require('mysql');
const axios = require('axios');


const app = express()
var port = process.env.PORT || 3000;


const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));


// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
})

var cart = [];
const part = require('./controllers/parts');
app.get('/getParts', (req, res) => {
  part.getAll((products) => {
    productArray = Object.values(JSON.parse(JSON.stringify(products)))
    res.render('parts.ejs', { all: productArray });
  });
})

const credit = require('./controllers/credit');
const res = require('express/lib/response');
app.get('/processCC', (req, res) => {
  credit.processSample((result) => {
    res.render('credit.ejs', { data: result });
  });
})

// Route for warehouse page
app.get('/warehouse', (req, res) => {
  res.render('warehouse.ejs');
})

// Route for admin page
app.get('/admin', (req, res) => {
  res.render('admin.ejs');
})

// Route for order page
const order = require('./controllers/order');
const { regexpToText } = require('nodemon/lib/utils');
const { isBuffer } = require('util');
app.get('/orders', (req, res) => {
  order.getAll((list) => {
    res.render('orders.ejs', { all: list });
  });
})

// Route for index page
app.get('/index', (req, res) => {
  res.render('index.ejs')
})

app.get('/checkout', (req, res) => {
  //console.log(cart)
  res.render('checkout.ejs', { cart })
})


app.post('/getParts', (req, res) => {
  //res.redirect('/checkout')
  cart = req.body.cart;
  res.render('checkout.ejs',{cart})
})

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})
