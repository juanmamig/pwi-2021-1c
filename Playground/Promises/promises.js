// Supongamos que esto tarda.
const getData = (callback) => {
  // Si hay error
  callback(err, undefined)

  //Si no hay error
  callback(undefined, data);
}


getData((err, data) => {
  if(err) {
    return console.log(err)
  }

  return data;
});


////////////////////


const getData = new Promise((resolve, reject) => {
  // Si hay error
  reject('Error');

  // Si no hay error
  resolve('Éxito')
})

const save = new Promise((resolve, reject) => {
  // Si hay error
  reject('Error');

  // Si no hay error
  resolve('Éxito')
})


getData.then(result => {
  console.log(result);
}).catch((err) => {
  console.log(err);
})


getData((err, data) => {
  if(err) return error;
  return data;
})

getData
  .then(info => console.log(info))
  .catch(err => console.log(err));



// Diferencias: Tenemos dos funciones separadas y solo una va a funcionar. No tenemos que estar trabajando con undefined y demás.