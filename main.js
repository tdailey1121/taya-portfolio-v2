// Unlock About section fade-in lines when "Who am I?" clicked
document.querySelector('.unlock-scroll').addEventListener('click', function() {
  const lines = document.querySelectorAll('.about .fade-line');
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('visible');
    }, index * 1000);
  });
});

// Unlock Projects section: remove scroll lock, expand projects, and fade-in cards
document.querySelector('.unlock-projects').addEventListener('click', function() {
  // Remove scroll lock to enable page scrolling
  document.body.classList.remove('locked-scroll');
  
  // Remove 'locked' class to expand projects section smoothly
  document.querySelector('.projects').classList.remove('locked');
  
  // Fade in each project card with staggered timing
  const projects = document.querySelectorAll('.projects .fade-line');
  projects.forEach((proj, index) => {
    setTimeout(() => {
      proj.classList.add('visible');
    }, index * 800);
  });
});
