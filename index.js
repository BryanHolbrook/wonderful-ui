const body          = document.querySelector('body');
const header        = document.querySelector('.header');
const overlay       = document.querySelector('.overlay')
const btnHamburger  = document.getElementById('btnHamburger');
const fadesElements = Array.from(document.querySelectorAll('.has-fade'));


btnHamburger.addEventListener('click', openMenu);


// Open Hamburger Menu Function
function openMenu() {
  if (header.classList.contains('open')) { // Open Hamburger Menu
    header.classList.remove('open');
    body.classList.remove('noscroll');
    fadeState('hidden');
  } else { // Close Hamburger Menu
    header.classList.add('open');
    body.classList.add('noscroll');
    fadeState('visible');
  }
}

// Fade State Function
function fadeState(state) {
  fadesElements.forEach(ele => {
    if(state !== 'visible') {
      ele.classList.add('has-fade');
      ele.classList.remove('fade-in');
    } else {
      ele.classList.remove('has-fade');
      ele.classList.add('fade-in');
    }
  });
};
