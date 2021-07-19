// Importo mongo y voy a usar la clase MongoClient
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

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

  // Inserto un solo producto. Recibe dos parámetros (la info del objeto, callBack)
  db.collection('products').insertOne({
    name: 'Xiaomi Poco X3',
    price: 32000
  }, (error, result) => {
    if(error) {
      return console.log("Error insertando un valor", error);
    }
    console.log(result);
  });


  // Agregamos muchos productos, recibe dos parámetros (un Array con todos los productos, un callback)
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

  // Busca un elemento específico, si encuentra más de uno solo devuelve el primero. Como parámetro recibe (atributos del elemento que estoy buscando, callback)
  db.collection('products').findOne({
    name: 'Moto G5'
  }, (err, foundedProduct) => {
    if(err) return console.log('Error buscando usuario', err);
    console.log(foundedProduct)
  });


  // A veces es necesario buscar elementos por ID, entonces utilizamos el método ObjectId presente en mongodb. 
  db.collection('products').findOne({
    _id: ObjectId('60f5d5f12a98bcef6ea137cb')
  }, (err, foundedProduct) => {
    if(err) return console.log('Error buscando usuario', err);
    console.log(foundedProduct)
  })

  // db.collection('products').find({}).toArray((err, res) => {});

  // A diferencia del anterior, este método trae varios resultados por eso tenemos que pasarlo a array. 
  db.collection('products').find({
    name: 'Moto G5'
  }).toArray((err, result) => {
    if (err) return console.log(err);
    console.log(result);
  });

  // Actualizo un solo registro por ID, y le paso con el operador $set lo que va a ser modificado.
  db.collection('products').updateOne({
    _id: new ObjectId('60f5d5f12a98bcef6ea137cb')
  }, {
    $set: {
      name: 'Updated Phone'
    }
  }, (err, updatedElement) => {
    if(err) return console.log(err);
    console.log(updatedElement)
  })

  // Eliminamos un objeto particular utilizando el id.
  db.collection('products').deleteOne({
    _id: new ObjectId('60f5d5f12a98bcef6ea137cb')
  }, (err, deleted) => {
    if(err) return console.log(err);
    console.log(deleted);
  });

  return console.log('Conexión Exitosa');
});