const express = require('express');
const mysql = require('mysql');
const axios = require('axios');


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
  part.getAll((list) => {
    res.render('parts.ejs', { all: list });
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

// Route to udpate status of order
var orderid;
app.post(`/updatestatus`, (req, res) => {
  let newStatus = 'closed';
  orderid = req.body.orderid;
  let sql = `UPDATE customerorder
  SET
      status = '${newStatus}'
      
  WHERE orderid = ${orderid}`;
  connection.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Status Updated...');
  })
});


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


app.post('/newCart', (req, res) => {
  cart = req.body.cart;
  console.log(JSON.stringify(cart))
  res.redirect('/checkout')
})



app.post('/createOrder', (req, res) => {
  connection.query(`INSERT INTO customerorder (name, email, address, shipandhandle, price, weight, timeoforder, status)
       VALUES ('${req.body.order.name}','${req.body.order.email}','${req.body.order.address}',' ${req.body.order.shipping }','${req.body.order.amount}','${req.body.order.weight}'
      ,'${req.body.order.date}','open' );`, function (err, result) {
      if (err) throw err;
    console.log(result);
    res.send('Order Created Thank you!');
  });
 
})

app.post('/newBrackets/', (req, res) => {
  orderDetails = req.body.order.date;
  console.log(orderDetails);
  connection.query(`delete from Brackets where (ID, minweight, maxweight, cost))
  VALUES ('id', '${req.body.Brackets.minweight}', '${req.body.Brackets.maxweight}'${req.body.Brackets.price}');`, function (err, res) {
    if (err) throw err;
    console.log(res);
    if (err) throw err;
    console.log(res);
    
  });
})

  app.post('/deleteBrackets/', (req, res) => {
    orderDetails = req.body.order.date;
    console.log(orderDetails);
    connection.query(`delete from Brackets where ID === ))
       VALUES ('id', '${req.body.Brackets.minweight}', '${req.body.Brackets.maxweight}'${req.body.Brackets.price}');`, function (err, res) {
      if (err) throw err;
      console.log(res);
    })
    ship.getAll((list) => {
      res.render('admin.ejs', { brackets: list });
    });
  })
  app.get('/adminOrder', (req, res) => {
    order.getAll((list) => {
      res.render('adminOrders.ejs', { all: list });
    });
  })

  app.post('/searchOrder', (req, res) => {
    connection.query(`Select * from customerorder where date <=   (name, email, address, shipandhandle, price, weight, timeoforder, status)
         VALUES ('orderid', '${req.body.order.name}','${req.body.order.email}',' ${req.body.order.shipping }','${req.body.order.amount}','${req.body.order.weight}'
        ,'${req.body.order.date}','open' );`, function (err, result) {
        if (err) throw err;
      console.log(result);
      res.send('Order Created Thank you!');
    });
   
  })
  

  
  app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`)
  })