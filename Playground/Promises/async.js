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


const sumaPromise = async (a,b) => {
  return new Promise((resolve, reject) => {
    const result = a + b;
    if(error) {
      reject('Ocurrió un Error');
    } else {
      resolve(result);
    }
  });
}
