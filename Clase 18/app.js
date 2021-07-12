const express = require('express');
const path = require('path');
const request = require('postman-request');
const products = require('./utils/products');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//request('', (error, res, body) => {});

request('https://fakestoreapi.com/products', (error, res, body) => {
  console.log(error)
  console.log(res)
  console.log(body)
});


app.get('', (req, res) => {
  res.render('index', {
    title: 'E-commerce',
    products
  });
});

app.get('/contacto', (req,res) => {
  res.render('pages/contacto', {
    title: 'Ecommerce | Contacto'
  });
});

app.listen(3000, () => {
  console.log("Funcionando en el puerto 3000");
});