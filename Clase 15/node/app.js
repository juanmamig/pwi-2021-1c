// Nos estamos llendo a buscar módulos. En este caso buscamos el módulo que se llama fs
const fs = require('fs');
const utils = require('./utils.js');
console.log(utils);

fs.writeFileSync('nombres.txt', 'Juan Ma Migliore');
fs.appendFileSync('nombres.txt', 'Danilo');