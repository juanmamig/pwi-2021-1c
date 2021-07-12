const request = require('postman-request');

const getAllProducts = (callback) => {
  request('https://fakestoreapi.com/products', (error, res, body) => {
    callback(body);
  });
}

module.exports = {
  getAllProducts
};

