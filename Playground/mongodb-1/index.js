const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoURL = 'mongodb://127.0.0.1:27017';
const dbName = 'ecommerce';

MongoClient.connect(mongoURL, { useNewUrlParser: true }, (error, client) => {
  if( error ) {
    return console.log("Error en la conexión con la DB");
  }

  const db = client.db(dbName);
  db.collection('products').insertOne({
    name: 'Xiaomi',
    price: 35000
  });


  db.collection('products').insertMany([
    {
    name: 'Mi A2',
    price: 27000
    },
    {
      name: 'Poco Phone X3',
      price: 45000
    }
  ]);

  return console.log("Conexión exitosa");
});