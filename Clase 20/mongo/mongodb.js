// Importo mongo y voy a usar la clase MongoClient
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// Me conecto a la base de datos local
const connectionURL = 'mongodb://127.0.0.1/:27017';
// 127.0.0.1 es igual a localhost. El puero que expone la DB local es el 27017
const databaseName = 'ecommerce';


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  // Si hay errores, devuelvo el error y termino la ejecución
  if(error) {
    return console.log('Error en la conexión al a base de datos', error);
  }

  // Me conecto a una DB específica
  const db = client.db(databaseName);

  // db.collection('products').insertOne({
  //   name: 'Xiaomi Poco X3',
  //   price: 32000
  // }, (error, result) => {
  //   if(error) {
  //     return console.log("Error insertando un valor", error);
  //   }
  //   console.log(result);
  // });

  db.collection('products').insertMany([
    {
      name: 'Moto G5',
      price: 17000
    },
    {
      name: 3000,
      price: 'Redmi 10'
    }
  ], (error, result) => {
    if (error) { return console.log('Error insertando muchos', error) }

    console.log(result);

  });

  return console.log('Conexión Exitosa');
});