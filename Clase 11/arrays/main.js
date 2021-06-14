const miArray = ["Juan", 29, true, undefined];
console.log(miArray[2]);

const matrix = ["Juan", [true, "Pedro"], 29];
console.log(matrix[1][1]);

console.log(matrix[10]);

console.log(matrix.length); //3

let nombres = ["Juan", "Mercedes", "Sofía", "Lucas", "Luca"];
console.log("El length de nombres es " + nombres.length); // 5

// Alt Gr + }}
console.log(`El length de nombres es ${nombres.length}`);

nombres.push("Gabriel");
console.log(nombres);
console.log(nombres.length); // 6

const eliminado = nombres.pop();
console.log(eliminado);

nombres.unshift("Ignacio");
console.log(nombres);

const eliminado2 = nombres.shift();
console.log(eliminado2);

console.log(nombres.indexOf("Sofía")); // 2
console.log(nombres.indexOf("Esteban")); // -1





// Funciones

// console.log();
// alert();
// prompt();

