// Requerimos Mongoose
const mongoose = require('mongoose');

// Establecemos la conexión con mongo y le pasamos un archivo de configuración.

//Para ver más sobre este archivo podemos ver mongoose.com
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});