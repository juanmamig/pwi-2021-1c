// Opción 1 - Función Sincrónica. La comida ya estaba lista
// const hacerLaComida = () => {
//   return "Está lista la comida";
// }

// console.log(hacerLaComida());


// Opción 2 (sin funcionar) - Función Asincrónica. La comida tarda dos segundos
// const hacerLaComida = () => {
//   setInterval(()=>{
//     return "Está lista la comida";
//   }, 2000);
// }

// console.log(hacerLaComida()); // Devuelve undefined


// Opción 2 - Solución

const hacerLaComida = (callback) => {
  setTimeout(()=>{
     callback("Está lista la comida");
  }, 2000);
}

hacerLaComida(respuesta => {
  console.log(respuesta);
}); // Te manod una función para que ejecutes cuando esté lista


