const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
  name: {
    type: String,
    validate(value) {
      if(value.length > 20) {
        throw new Error('El nombre tiene que tener menos de 20 caracteres')
      }
    }
  },
  price: {
    type: Number,
    required: true,
  }
});

module.exports = Product;

// const product = new Product({
//   name: 'Guitarra Fender',
//   price: 29000
// });

// product.save().then(() => {
//   console.log(product);
// }).catch((error) => {
//   console.log(error);
// })