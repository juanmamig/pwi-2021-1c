const express = require('express');
require('./src/db/mongoose');
const Product = require('./src/model/product')

const app = express();
const port = process.env.PORT || 3000;

// Importante para parsear a JSON las respuestas
app.use(express.json());

app.post('/products', (req, res) => {
  console.log(req.body);
  const product = new Product(req.body);
  product.save().then(() => {
    res.send(product)
  }).catch(err => {
    res.status(400).send(err)
  });
})


app.get('/products', (req, res) => {
  Product.find().then((products) => {
    res.send(products);
  }).catch((err) => {
    res.status(500).send(err)
  })
  // Product.find({name: 'Juan Ma'});
});

app.get('user/:id', (req, res) => {
  const _id = req.params.id;
  Product.findById(_id).then((product) => {
    res.send.apply(product);
  }).catch(err => {
    res.status(404).send(err);
  })
})

app.listen(port, () => {
  console.log('Server is running on port ' + port);
})