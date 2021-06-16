/** Funciones #1 */
// Definir una función
// function saludar() {
//   console.log(`Hola, Ale`);
// }

// Ejecutar una función

// saludar();
// saludar();
// saludar();
// saludar();


/** Funciones #2 - Params y validación */

// function saludar(nombre) {
//   if (typeof nombre === "string") {
//     console.log(`Hola, ${nombre}`);
//   } else {
//     console.error('Tipo de dato inválido');
//   }
// }

// function saludar(nombre) {
//   if (typeof nombre !== "string") {
//     console.error('Tipo de dato inválido');
//   } else {
//     console.log(`Hola, ${nombre}`);
//   }
// }

/** Funciones #3 - Params y validación y valor por default */

// function saludar(nombre = 'Extraño') {
//   if (typeof nombre !== 'string') {
//     console.error('Tipo de dato inválido');
//   } else {
//     console.log(`Hola, ${nombre}`);
//     // console.log('Hola, ' + nombre);
//   }
// }

//const mensaje = 'Existe "la verdad" y la verdad';


// saludar("María");
// saludar("Luciano");
// saludar(23);
// saludar();

/** Funciones #4 - Múltiples parámetros */

// function suma(n1, n2) {
//   console.log(n1 + n2);
// }

// suma(10, 20); //30
// suma(10, '20'); //'1020'


/** Funciones #5 - Objetos y Arrays como parámetros */


// function saludarArr(nombres = []) {
//   for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
//   }
// }

// const nombresArr = ['Juan', 'Pedro', 'Sofía', 'Estela'];
// saludarArr(nombresArr);
// saludarArr(["José", "Ionatán"]);
// saludarArr([23, 22, 544]);
// // saludarArr(23, 22, 544); // Quiero tirar un error
// // saludarArr({ nombre: "Juan" }); // Quiero tirar un error
// saludarArr();


/** Funciones #6 - Funciones que devuelven */

// function suma(n1, n2) {
//   return n1 + n2;
//   console.log(n1, n2);
// }

// suma(10, 20); //30

// let resultado = suma(10, 20);
// // console.log(suma(10, 20));
// console.log(resultado);

// suma(10, '20'); //'1020'


function codigo(nombre, apellido, edad) {
  let codigoDto = nombre[0] + apellido[0] + edad;
  return codigoDto;
}

// Hola => ['H']['o']['l']['a']
//           0    1    2    3

const codigo1 = codigo("Juan", "Zarasa", 29);
console.log(codigo1);

const codigo2 = codigo("Juan María", "Migliore", 29);
console.log(codigo2);

const codigo3 = codigo(20, 200, 29); // NaN
console.log(codigo3); // NaN