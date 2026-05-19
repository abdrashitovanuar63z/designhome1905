// Site interactions and animations for AI Traffic Lights System
const backToTopButton = document.getElementById('backToTop');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Toggle mobile navigation menu
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Show back-to-top button when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Smooth scroll back to top
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Close mobile menu when a link is clicked
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// Scroll reveal animations using ScrollReveal
if (window.ScrollReveal) {
  const sr = ScrollReveal({
    distance: '30px',
    duration: 850,
    easing: 'ease-out',
    origin: 'bottom',
    interval: 100,
    reset: false,
  });

  sr.reveal('.reveal', { opacity: 0, interval: 120 });
  sr.reveal('.reveal-delay', { delay: 180, origin: 'right' });
}
