/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/

const h1 = document.querySelector('h1')

/*----------------------------- Event Listeners -----------------------------*/

h1.addEventListener('click', h1TextBounce)

/*-------------------------------- Functions --------------------------------*/

function h1TextBounce() {
  h1.classList.add('animate__bounce')
  window.setTimeout(h1RemoveTextBounce, 1000)
  
}

function h1RemoveTextBounce() {
  h1.classList.remove('animate__bounce')
}