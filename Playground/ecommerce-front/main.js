const mainForm = document.querySelector('.main-form');

var url = 'http://localhost:3000/product';

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
    const formData = new FormData(mainForm);

    console.log(formData.values());
    for (let value of formData.values()) {
      console.log(value);
    }
  
    console.log(formData.entries());

    const body = JSON.stringify(Object.fromEntries(formData));
  
    fetch(url, {
      method: 'POST',
      body,
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:', response))
      .catch(error => console.error('Error:', error));
})
