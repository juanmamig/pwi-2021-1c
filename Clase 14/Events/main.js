const $button = document.querySelector('.dark-light');
const $body = document.querySelector('body');

// Counter Click
// let i = 0;
// $button.addEventListener('click', function () {
//   i++;
//   if (i > 10) {
//     alert("Sos una persona ansiosa, dejá de hacer click");
//   }
// });

$button.addEventListener('click', function () {
  $body.classList.toggle('dark');
});

addEventListener('elNombreDelEvento', function () { });

