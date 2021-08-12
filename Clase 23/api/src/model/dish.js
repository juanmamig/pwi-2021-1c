const mongoose = require('mongoose');
// Modelamos nuestro primer documento.
// Seteamos las propiedades y el tipo de dato de cada propiedad
const Dish = mongoose.model('Dish', {
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Dish;
