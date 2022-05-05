const express = require('express');
const mysql = require('mysql');
const axios = require('axios');
const sphp = require('sphp');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

connection.connect();


const app = express()
var port = process.env.PORT || 3000;

app.use(express.static('public/'));

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

app.get('/credit', (req, res) => {
  //console.log(cart)
  res.render('credit.ejs')
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
const ship = require('./controllers/admin');
app.get('/admin', (req, res) => {
  ship.getAll((list) => {
    res.render('admin.ejs', { brackets: list });
  });
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


app.post('/createOrder', (req, res) => {
  orderDetails = req.body.order.date;
  console.log(orderDetails);
  connection.query(`INSERT INTO customerorder (name, email, address, shipandhandle, price, weight, timeoforder, status)
       VALUES ('orderid', '${req.body.order.name}','${req.body.order.email}',' ${req.body.order.shipping }','${req.body.order.amount}','${req.body.order.weight}'
      ,'${req.body.order.date}','open' );`, function (err, res) {
    if (err) throw err;
   console.log(res);
    
  });
})

app.get('/adminOrder', (req, res) => {
  order.getAll((list) => {
    res.render('adminOrders.ejs', { all: list });
  });
  
})

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})
