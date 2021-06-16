// Definir una función
// function saludar() {
//   console.log(`Hola, Ale`);
// }

// Ejecutar una función

// saludar();
// saludar();
// saludar();
// saludar();


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

function saludar(nombre = 'Extraño') {
  if (typeof nombre !== 'string') {
    console.error('Tipo de dato inválido');
  } else {
    console.log(`Hola, ${nombre}`);
    console.log('Hola, ' + nombre);
  }
}

//const mensaje = 'Existe "la verdad" y la verdad';


saludar("María");
saludar("Luciano");
saludar(23);
saludar();
