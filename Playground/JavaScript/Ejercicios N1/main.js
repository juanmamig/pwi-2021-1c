/* Pedirle al usuario que ingrese un número y diga si el número es par o impar. */

// let num = prompt("Ingrese un número"); //"55"
// num = Number(num);
// if (num % 2 === 0) {
//   console.log("Es Par");
// } else {
//   console.log("Es impar");
// }


/* Pedirle al usuario que ingrese dos números y diga si el primer número es divisible
por el segundo. */

// let primerNumero = prompt("Ingrese un número");
// primerNumero = Number(primerNumero);
// let segundoNumero = prompt("Ingrese otro número");
// segundoNumero = Number(segundoNumero);
// if (primerNumero % segundoNumero === 0) {
//   console.log("El primer número es divisible por el segundo");
// } else {
//   console.log("El primer número no es divisible por el segundo");
// }

/*
Armar un programa que pida un usuario y una contraseña. Si la contraseña es
correcta, dejarlo pasar, sino decirle que no puede entrar.
*/

// const pass = "1234";
// prompt("Ingrese su usuario");
// const userPass = prompt("Ingrese la contraseña");
// if (userPass === pass) {
//   console.log("Puede pasar");
// } else {
//   console.log("No puede pasar")
// }

/**
 *
Entrada a un bar - sector VIP:
a. Pedirle la edad al usuario
b. Si tiene más de 18 años, pedirle la clave
c. Si la clave es correcta, dejarlo pasar al sector vip
d. Si la clave es incorrecta no puede pasar al sector vip
e. Si tiene menos de 18 años no puede pasar.
 */


// Opción 1
// const clave = "1234";
// let edad = prompt("Ingrese su edad");
// edad = Number(edad);

// if (edad > 18) {
//   const userClave = prompt("Ingrese la clave");
//   if (userClave === clave) {
//     console.log("Puede pasar al sector VIP");
//   } else {
//     console.log("No puede pasar al sector VIP");
//   }
// } else {
//   console.log("No puede pasar, su edad es muy chica");
// }

// Opción 2

// const clave = "1234";
// let edad = prompt("Ingrese su edad");
// edad = Number(edad);
// const userClave = prompt("Ingrese la clave");

// if (edad <= 18) {
//   console.log("No puede pasar, su edad es muy chico");
// } else if (userClave === clave) {
//   console.log("Puede pasar al sector VIP");
// } else {
//   console.log("No puede pasar al sector VIP");
// }

/* Refactorizar el punto 3, usando el operador lógico && */

// const clave = "1234";
// let edad = prompt("Ingrese su edad");
// edad = Number(edad);
// const userClave = prompt("Ingrese la clave");

// if (edad > 18 && userClave === clave) {
//   console.log("Puede pasar al sector VIP");
// } else if (edad < 18) {
//   console.log("No puede pasar, su edad es muy chico");
// } else {
//   console.log("No puede pasar al sector VIP");
// }

