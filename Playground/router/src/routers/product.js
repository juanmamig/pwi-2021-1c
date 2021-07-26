const express = require('express');
const router = new express.Router();
const Product = require('../model/product');

router.post('/product', (req, res) => {
  console.log(req.body);
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


module.exports = router;