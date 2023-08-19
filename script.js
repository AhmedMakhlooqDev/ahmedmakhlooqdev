// script.js


// const toggleButton = document.querySelector('.toggle-button');
const body = document.querySelector('body');

// toggleButton.addEventListener('click', () => {
//   body.classList.toggle('dark-mode');
// });


// Listener to move within pages 
// document.addEventListener('DOMContentLoaded', function() {
//   const contactLink = document.querySelector('a[href="#contact"]');

//   if (contactLink) {
//     contactLink.addEventListener('click', function(e) {
//       e.preventDefault();
//       const contactSection = document.querySelector('#contact');
//       if (contactSection) {
//         contactSection.scrollIntoView({ behavior: 'smooth' });
//       }
//     });
//   }
// });


document.addEventListener('mousemove', function(event) {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  
  var mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
  var mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

  // Adjust the radius to control the gradient size (smaller radius -> smaller gradient)
  var gradientRadius = '350px';

  var radialGradient = document.querySelector('.radial-gradient');
  radialGradient.style.background = 'radial-gradient(circle ' + gradientRadius + ' at '
    + mouseXpercentage + '% ' + mouseYpercentage + '%, #293b64, #0F172A)';
});


