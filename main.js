document.querySelector('.unlock-scroll').addEventListener('click', function() {
  document.querySelector('.about').classList.remove('locked');
});

document.querySelector('.unlock-projects').addEventListener('click', function() {
  document.body.classList.remove('locked-scroll');
  document.querySelector('.projects').classList.remove('locked');
});
