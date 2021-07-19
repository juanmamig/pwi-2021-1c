const request = require('postman-request');

const getAllProducts = (callback) => {
  request('https://fakestoreapi.com/products', (err, res, body) => {
    if(err) {
      return callback({msg: 'Error en la conexieon', err}, undefined);
    }
    if (res) {
      if(body) {
        return callback(undefined, body);
      } else {
        return callback({msg: 'No se encontrarons productos', err}, undefined);
      }
    }
  });
}

module.exports = {
  getAllProducts
}
