/* Objetos => Tipo de dato. Se le agregan caracteísticas */

let persona = {
  nombre: 'Cristina',
  edad: 47,
  comidasPreferidas: ['Asado', 'Pasta', 'Papas Fritas']
}

// ¿Cual es la segunda comida preferida de Cristina?
console.log(persona.comidasPreferidas);

for (let i = 0; i < persona.comidasPreferidas.length; i++) {
  console.log(persona.comidasPreferidas[i]);// [0], [1], [2]
}

// Atajos de operadores
// let num = 0;
// num = num + 1;
// num++;
// num = num - 1;
// num--;
// num = num - 2;
// num-=2;
// num = num + 2;
// num+=2;


let personas = [
  {
    nombre: 'Cristina',
    edad: 47,
    comidasPreferidas: ['Asado', 'Pasta', 'Papas Fritas']
  },
  {
    nombre: 'Estefanía',
    edad: 27,
    comidasPreferidas: ['Sushi', 'Pasta']
  }
]

for (let i = 0; i < personas.length; i++) {
  const mensaje = `
    Hola ${personas[i].nombre}. Hoy cumplís ${personas[i].edad} y por eso
    te regalamos tu comida preferida: ${personas[i].comidasPreferidas[0]}
  `;
  console.log(mensaje);
}

// const mensaje = "Hola" + personas[i].nombre + ". Hoy cumplís " + personas[i].edad + "y por eso te regalamos tu comida preferida: " + ${personas[i].comidasPreferidas[0];

//"" '' ``

/*
[FE] ===> [Servicio] ===> [DB]
          REST API

El servicio va a responder con algo "muy similar a un objeto"
{}
*/



