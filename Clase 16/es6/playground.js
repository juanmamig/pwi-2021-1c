// // Opción global
// function saludar(nombre) {
//     console.log("Hola " + nombre);
// }

// // Opción segura
// const saludar = function(nombre){
//     console.log("Hola " + nombre);
// }

// Arrow
// const saludar = (nombre) => {
//     console.log("Hola " + nombre);
// }

const saludar = nombre => {
    console.log("Hola " + nombre);
}

saludar("Juan");

// const suma = (n1,n2) => {
//     return n1 + n2;
// }

const suma = (n1,n2) => n1 + n2;

console.log(suma(3,10));


const nombres = ["Juan", "Pedro", "Sofía"];
const [a,b,c] = nombres;
const [n1,n2,n3] = nombres;
//const [,,n3] = nombres;

// Esto está creando una constante a, con el valor de la primer posición
console.log(a);

const usuario = {
    id: 41,
    nombre: "Pedro"
}

const { nombre, id } = usuario;
console.log(nombre);
console.log(id);


const numeros = [1,2,3,4];

// Queremos tener un array con los dobles de cada número

// Paso 1, vamos a usar la función map que nos devuelve otro array y lo vamos a guardar en una nueva variable.

// const dobles = numeros.map()

// Paso 2, vamos a pasar como parámetro una función anónima.
// const dobles = numeros.map(function(){});

// Paso 3, necesitamos acceder a cada elemento del array, por cada vuelta. Similar al numeros[i]
// const dobles = numeros.map(function(elemento){});

// const dobles = [1,2,3,4];
// numeros.forEach(function(el){
//     dobles.push(el*2);
// })

const dobles = numeros.map(function(numero){
    return numero*2;
}); // [2,4,6,8]


// const dobles = numeros.map((el) => { return el * 2}); // Extensa
// const dobles = numeros.map((el) => el * 2); // Media
// const dobles = numeros.map(el => el * 2); // Optima

console.log(dobles);