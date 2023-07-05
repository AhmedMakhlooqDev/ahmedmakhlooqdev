// script.js


const toggleButton = document.querySelector('.toggle-button');
const body = document.querySelector('body');

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});


// Listener to move within pages 
document.addEventListener('DOMContentLoaded', function() {
  const contactLink = document.querySelector('a[href="#contact"]');

  if (contactLink) {
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

