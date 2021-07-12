// const hacerLaComida = () => {
//   return "La comida está lista";
// }

// console.log(hacerLaComida()); // "La comida está lista"

// //setTimeout(function, number);
//setTimeout(()=> {}, 2000);

// setTimeout(() => {
//   console.log("Luego de dos segundos");
// }, 10000);

// const hacerLaComida = () => {
//   setTimeout(()=> {
//     return "La comida está lista";
//   }, 2000);
// }

// const comida = hacerLaComida();
// console.log(comida);


// Paso 3 - Ejecución callback

// const hacerLaComida = (avisame) => {
//   setTimeout(()=> {
//     avisame();
//     //return "La comida está lista";
//   }, 2000);
// }
// const avisame = () => { console.log("Está Lista"); }
// hacerLaComida(avisame);


const loguear = (callback) => {
  // 1 Se va a la base de Datos
  // 2 Busca si el usuario y contraeña están bien
  // 3 Vuelve con una respuesta
  // TODO eso tarda 3 segundos.
  setTimeout(() => {
    // Cuando todo está listo, mando la respuesta
    callback(true);
    //callback(false);
  }, 3000);
}

loguear((response)=> { if(response) { console.log('Está Logueado') }});

// (response) => {  if(response) {traerFotosDelUsuario(); } }
