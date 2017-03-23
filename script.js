var p = document.querySelector('p');
var img = document.querySelector('img');

p.addEventListener('click', function () {
  img.classList.toggle('hidden');

  var containsMaybe = img.classList.contains('hidden');

  if (containsMaybe === true) {
    p.textContent = 'Show me the money!'
  }
  else {
    p.textContent = 'Pay your taxes!';
  }
});
