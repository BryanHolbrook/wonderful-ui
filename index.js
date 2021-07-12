const body          = document.querySelector('body');
const header        = document.querySelector('.header');
const overlay       = document.querySelector('.overlay')
const btnHamburger  = document.getElementById('btnHamburger');
const fadesElements = Array.from(document.querySelectorAll('.has-fade'));
const featurListLis = Array.from(document.querySelectorAll('.features__list li'));
const featurListLisActives = Array.from(document.querySelectorAll('.features__list li.active'));
const featurTaps    = Array.from(document.querySelectorAll('.features__feature'));
const featurTapsActives    = Array.from(document.querySelectorAll('.features__feature.active'));
const contactForm   = document.querySelector('.contact__form');
const emailGroup    = document.querySelector('.form__input--group');
const emailInput    = document.querySelector('.form__input--email');
let errorMessage    = document.querySelector('.form__input--error--message');

btnHamburger.addEventListener('click', openMenu);

contactForm.addEventListener('submit', emailValidation);

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

// Features Taps Active
(function tapsActive() {
  // Active Count
  let activeCount = 0;

  // Loop On All The List Li Of The [ Features Seaction ] Header
  featurListLis.forEach(listLi => {
    // When Click On Any li
    listLi.addEventListener('click', () => {
      // Let the activeCount equle the target clikced li index
      activeCount = featurListLis.indexOf(listLi);

      // Remove All The Active Classes From Both List Li's And Taps Actives
      removeActiveClass(Array.from(listLi.parentElement.querySelectorAll('li.active')));
      removeActiveClass(Array.from(listLi.parentElement.parentElement.querySelectorAll('.features__feature.active')));

      // Add Class Active On The Target Li
      listLi.classList.add('active');
      // Also Add Class Active On The Target Tap
      // featurTaps[activeCount] mean let us say the [activeCount] is 1
      // so we have in activeCount 1 the activeCount is the second tap in the array of the taps
      // i hope you understand i hope :)
      featurTaps[activeCount].classList.add('active');
    });
  });
})();

// Function Remove Active Class
function removeActiveClass(actives) {
  actives.forEach(activeEle => {
    activeEle.classList.remove('active');
  });
};

// Validation Email Function
function emailValidation(event) {
  // Preventing Default Behavior
  event.preventDefault();
  // Input Email Value
  const emailValue = emailInput.value.trim();

  if(emailValue === '') { // If Input Is Empty
    emailGroup.classList.add('form__input--group--invalid');
    errorMessage.innerHTML = "Input Can Not Be Empty";
  }else { /* Else */
    let emailValidate = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(emailValue);

    if(emailValidate) { /* If He Is Email */
      contactForm.submit();
    }else {
      emailGroup.classList.add('form__input--group--invalid');
      errorMessage.innerHTML = "Whoops, make sure it's an email";
    }
  }
};

/* Wave Script */
// const wave1 = "M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z",
//       wave2 = "M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
//       wave3 = "M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
//       wave4 = "M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z";
//
// anime({
//   targets: '.wave-top > path',
//   easing: 'linear',
//   duration: 9500,
//   loop: true,
//   d: [
//     { value: [wave1, wave2] },
//     { value: wave3 },
//     { value: wave4 },
//     { value: wave1 },
//   ],
// });
