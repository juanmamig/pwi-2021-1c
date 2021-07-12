const express = require('express');
const path = require('path');
const products = require('./utils/products');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


app.get('', (req, res) => {

  products.getAllProducts((error, listOfProducts) => {

    if(error) {
      return res.send('FATAL ERROR');
    }
    
    const JSONProducts = JSON.parse(listOfProducts);
    return res.render('index', {
      title: 'E-commerce',
      JSONProducts
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


