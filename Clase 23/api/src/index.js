require('./db/mongoose');
const express = require('express');
const app = express();
const Dish = require('./model/dish');
app.use(express.json());

app.get('/dishes', (req, res) => {
  Dish.find()
    .then((result) => {
      res.send(result);
    })
    .catch(err => { res.send(err); });
});

app.listen(3000, () => {
  console.log('Escuchando puerto 3000');
})


