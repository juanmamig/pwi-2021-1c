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

app.get('/products/:category', (req, res) => {
  const category = req.params.category;

  Product.find({category}).then((products) => {
    res.render(products);

  }).catch((err) => {
    
    res.status(500).send(err)
  })
});

app.get('/product/:id', (req, res) => {
  const _id = req.params.id;
  Product.findById(_id).then((product) => {
    if(!product) {
      return res.status(404).send();
    }
    res.send(product);
  }).catch(err => {
    res.status(404).send(err);
  })
});

app.patch('/product/:id', (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  Product.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true}).then((product) => {
    if(!product) {
      return res.status(404).send();
    }
    res.send(product);
  }).catch(err => {
    res.status(404).send(err);
  });
})

app.patch('/product/:id', (req, res) => {
  const _id = req.params.id;
  Product.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true}).then((product) => {
    if(!product) {
      return res.status(404).send();
    }
    res.send(product);
  }).catch(err => {
    res.status(404).send(err);
  });
})

app.listen(port, () => {
  console.log('Server is running on port ' + port);
})

const products = [
  {
    id: 1,
    name: "algo",
    category: "corpiños"
  },
  {
    id: 2,
    name: "algo",
    category: "bombachas"
  },
  {
    id: 3,
    name: "algo",
    category: "corpiños"
  }
];

const filteredProducts = products.filter((product) => product.category === 'corpiños');