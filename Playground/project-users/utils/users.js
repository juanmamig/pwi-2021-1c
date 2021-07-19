const request = require('postman-request');

const getUsers = (callback) => {
  request('https://fakestoreapi.com/users', (err, res, body) => {
    if(err) {
      return callback(err, undefined);
    }
    if(res) {
      if(body){
        const JSONBody = JSON.parse(body);
        return callback(undefined, JSONBody);
      }
      return callback('Users not found', undefined);
    }
  });
}

module.exports = {
  getUsers
}