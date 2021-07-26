const mongoose = require('mongoose');
// Modelamos nuestro primer documento.
// Seteamos las propiedades y el tipo de dato de cada propiedad
const Product = mongoose.model('Product', {
  name: {
    type: String,
    required: true,
    validate(value) {
     if (value.length > 20) {
       throw new Error('No se pueden ingresar nombres con más de 10 caracteres')
     } 
    }
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = Product;


// Queda comentado porque se llevó al index.js

// // Instancio un nuevo producto
// const product = new Product({
//   name: 'Xiaomi Poco X3',
//   price: 36000
// })

// // Lo guardo
// // product.save().then().catch();

// /* Como el .save() devuelve una promise, lo que hacemos es 

// a) Espererar que se resuelva en el .then()
// b) Esperar el error en el .catch()

// Ambas opciones usan callback.
// */
// product.save()
//   .then(() => { console.log(product) })
//   .catch( (err) => { console.log(err) });