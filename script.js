var p = document.querySelector('p');
console.log(p);


p.addEventListener('click', function () {
  p.classList.toggle('chosen');
});
