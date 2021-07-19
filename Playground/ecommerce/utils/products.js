const request = require('postman-request');

const getAllProducts = (callback) => {
  request('https://fakestoreapi.com/products', (error, res, body) => {
    if(error) {
      return callback(error, undefined);
    }
    
    if (res) {
      if(body) {
        return callback(undefined, body);
      } 
      callback("No se encontraron prodcutos", undefined);
    }
  });
}


module.exports = {
  getAllProducts
};

