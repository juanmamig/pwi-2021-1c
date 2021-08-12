require('./db/mongoose');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const Product = require('./model/product');

app.use(cors())
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

app.get('/products', (req, res) => {
  Product.find()
    .then((result) => {
      res.send(result);
    })
    .catch(err => { res.send(err); });
});

// misitio.com/product/34242 => Se va a guardar en el objeto params una propiedad id que va a tener todo lo que está después de la barra.
app.get('/product/:id', (req, res) => {
  const _id = req.params.id;
  // Me busco un producto en la DB por su ID
  Product.findById(_id)
  .then((product) => {
    // Si no lo encuentro, mando un 404.
    if(!product) {
      return res.status(404).send("Product not found");
    }
    // Si lo encuentro, mando un 200 y el resultado
      res.status(200).send(product)
    })
    // Si no lo encuentro, mando un 404 y un error
    .catch(err => {
      const validId = mongoose.Types.ObjectId.isValid(_id);
      if(!validId) {
        return res.status(501).send(err,);
      }
      res.status(500).send(err);
    })
});



app.listen(3000, () => {
  console.log('Escuchando puerto 3000');
})


app.get('/product/:id', (req, res) => {
  const _id = req.params.id;
});


