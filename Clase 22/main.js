const form = document.querySelector('.main-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Esto nos va a servir para obtener los datos del formulario. Usa funcionalidades nuevas de JavaScript
  const formData = new FormData(form);
  const body = Object.fromEntries(formData); // { name: "Lo que ingresó el usuario", price: 123, id: dfhkg234sdfkj34 }
  const stringJson = JSON.stringify(body);

  console.log(stringJson);

  fetch('http://localhost:3000/product', {
    method: 'PATCH',
    body: stringJson,
    headers:{
      'Content-Type': 'application/json'
    }
  }).then((res) => { console.log(res) })
    .catch(err => console.log(err));
});
