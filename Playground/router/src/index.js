require('./db/mongoose');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
const productRouter = require('./routers/product');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(productRouter);


app.listen(3000, () => {
  console.log('Escuchando puerto 3000');
})
