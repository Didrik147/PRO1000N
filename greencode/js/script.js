/* Navbar */
// Get elements from DOM
const barsEl = document.querySelector('.hamburger')
const navlinksEl = document.querySelector('.navlinks')

// Show navlinks when clicking hamburger menu
barsEl.addEventListener('click', toggleNavlinks)

// Close navlinks when clicking on link
navlinksEl.addEventListener('click', toggleNavlinks)

function toggleNavlinks(){
  navlinksEl.classList.toggle('show')
}

/* Form validation on change */
//const formInputEls = document.querySelectorAll('form input')

/* Code is heavily inspired by the following website: https://www.aleksandrhovhannisyan.com/blog/html-input-validation-without-a-form/ */
/* formInputEls.forEach(inputEl => {
  inputEl.addEventListener('change', (e) => {
    const isValid = e.target.reportValidity();
    e.target.setAttribute('aria-invalid', !isValid);
  })
}) */