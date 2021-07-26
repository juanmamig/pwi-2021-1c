const error = false;

// Callback Pattern
const sumaCallback = (a,b, callback) => {
  setTimeout(() => {
    const result = a + b;
    if(error) {
      callback('Ocurrió un Error', undefined);
    } else {
      callback(undefined ,result);
    }
  },2000);
}

sumaCallback(10,20, (error, result) => {
  if(error) {
    console.log(error);
  }
  console.log(result);
})

// Promise Pattern
const sumaPromise = (a,b) => {
  return new Promise((resolve, reject) => {
    const result = a + b;
    if(error) {
      reject('Ocurrió un Error');
    } else {
      resolve(result);
    }
  });
}

sumaPromise(10,20).then((result) => {console.log(result);
}).catch(err => {
  console.log(err);
})


// Promise Chaining
sumaPromise(10,20).then((result) => {
  // Devuelvo una nueva promesa con el resultado de la anterior
  return sumaPromise(result, 20);
}).then((result2) => {
  console.log(result2);
}).catch(err => {
  console.log(err);
})