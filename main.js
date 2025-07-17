document.querySelector('.unlock-scroll').addEventListener('click', function () {
  document.body.classList.remove('locked-scroll'); 
  const lines = document.querySelectorAll('.about .fade-line');
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('visible');
    }, index * 1000);
  });
});

document.querySelector('.unlock-projects').addEventListener('click', function () {
  document.body.classList.remove('locked-scroll');
  const projects = document.querySelectorAll('.projects .fade-line');
  projects.forEach((proj, index) => {
    setTimeout(() => {
      proj.classList.add('visible');
    }, index * 800);
  });
});
