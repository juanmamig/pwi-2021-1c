require('./db/mongoose');
const express = require('express');
const app = express();
const Product = require('./model/product');

app.use(express.json());

app.post('/product', (req, res) => {

  // Instancio un nuevo producto
  const product = new Product(req.body)
  product.save()
    .then(() => { 
      res
        .status(201)
        .send(product);
    })
    .catch( (err) => {
      res
        .status(400)
        .send(err);
    });
});

app.listen(3000, () => {
  console.log('Escuchando puerto 3000');
})
