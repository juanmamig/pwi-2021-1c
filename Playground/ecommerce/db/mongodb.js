const mongodb = require('mongodb');
// Inicializo el cliente
const MongoClient = mongodb.MongoClient;

// Establezco la ruta y la URL
const mongoURL = 'mongodb://127.0.0.1:27017';
const dbName = 'ecommerce';

// Me conecto
MongoClient.connect(mongoURL, { useNewUrlParser: true }, (err, client) => {

  // Si hay error, freno el código
  if(err) {
    return console.log('Error en la conexión');
  }

  // Me conecto a una base de datos expecífica
  const client = client.db(dbName);

  // Agrego colecciones
  db.collection('products').insertOne({
    name: 'Xiaomi',
    price: 35000
  });

  // Finalizo la conexión
  return console.log('Conexión Exitosa');
})