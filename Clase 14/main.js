/**------------------- Experimentos con H1 */

const h1 = document.querySelector("h1");
// console.log(h1);
// console.dir(h1);

// Interacción con el usuario y cambio de estilos
let color = prompt("Ingrese un color en inglés");

if (color === "San Lorenzo") {
  color = "red";
}

h1.style.color = color;
h1.style.fontSize = '35px';


/**------------------- Experimentos con H2 */

const h2 = document.querySelector("h2");
h2.style.color = "blue";

// Busca el primero y corta


// Devuelve un NodeList que es similar a un array
const allH2 = document.querySelectorAll("h2");
console.log(allH2); // [h2,h2,h2] NodeList | length, for


for (let i = 0; i < allH2.length; i++) {
  allH2[i].style.color = "green";
}

// 1. Tengo un Array
// 2. Ejecuto un método de los arrays que se llama forEach

// allH2.forEach();
// 3. Este método es similar al bucle for, y va a recibir como parámetro una función anónima. 

// ¿Qué es una función anónima? Una función sin nombre function(){}

// allH2.forEach(  function(){}  );

// 4. Bonus. La función anónima va a recibir como parámetro CADA ELEMENTO DEL ARRAY


allH2.forEach(function (item) {
  console.log(item);
});

// ¿ Qué va a valer (elemento)?
// 1er Vuelta => (Primer item)
// 2da Vuelta => (Segundo item)
// 3er Vuelta => (Tercer item)


// Parámetros en string que acepta querySelector
// const h2 = document.querySelector("tagName");
// const h2 = document.querySelector(".nombreDeClase");
// const h2 = document.querySelector("#id");
// const h2 = document.querySelector(".mainNav ul");


// Agregar clases desde JS
const p = document.querySelector(".mainP");
p.classList.add("highlight");
// p.classList.remove("highlight");
// p.classList.toggle("highlight");

// Toggle => Si tiene la clase, la elimino y si no tiene la clase, la agrego.

const a = document.querySelector("a");
const hrefValue = a.getAttribute("href"); // https://google.com
console.log(hrefValue);

a.setAttribute("href", "https://yahoo.com.ar");

