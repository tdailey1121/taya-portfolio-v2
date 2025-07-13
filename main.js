// unlock scroll when button clicked
document.querySelector('.unlock-scroll').addEventListener('click', function() {
  document.body.classList.remove('locked-scroll');

  // fade in lines like typing
  const lines = document.querySelectorAll('.fade-line');
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('visible');
    }, index * 1000);
  });
});
