let edad = prompt("Ingrese su edad");
console.log(typeof edad); //string
// edad = parseInt(edad, 10);
edad = Number(edad);
console.log(typeof edad); //number
console.log(edad + 10); // la suma de edad + 10

if (edad >= 18) {
  alert("Puede pasar");
} else {
  alert("Debe ser mayor de edad");
}


// Programa no òptimo #1

let vacuna = prompt("¿Qué vacuna recibió?");
vacuna = vacuna.toLowerCase();

if (vacuna == "pfizer") {
  alert("Puede pasar a Europa")
} else if (vacuna == "johnson & johnson") {
  alert("Puede pasar a Europa")
} else if (vacuna == "sinopharm") {
  alert("Puede pasar a Europa")
} else {
  alert("NO puede pasar")
}

// Normalización de String
if ("pfizer" == "Pfizer") { } // falso
vacuna.toLowerCase(); // PfiZeR => pfizer

// Fallback

/*
* Es el último caso que se ejecuta si no se cumplieron las condiciones anteriores
*/