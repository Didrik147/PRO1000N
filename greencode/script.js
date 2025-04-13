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
