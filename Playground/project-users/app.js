const express = require('express');
const path = require('path');
const products = require('./utils/products');
const users = require('./utils/users');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('', (req, res) => {

  users.getUsers((error, data) => {
    if(error) {
      return res.send('Error connecting with server');
    }
    return res.render('index', {
      title: 'E-commerce',
      products,
      users: data
    });
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