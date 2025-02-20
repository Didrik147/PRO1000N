// Get elements from DOM
const barsEl = document.querySelector('.fa-bars')
const navlinksEl = document.querySelector('.navlinks')

// Show navlinks when clicking hamburger menu
barsEl.addEventListener('click', toggleNavlinks)

// Close navlinks when clicking on link
navlinksEl.addEventListener('click', toggleNavlinks)

function toggleNavlinks(){
  navlinksEl.classList.toggle('show')
}