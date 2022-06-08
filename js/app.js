/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/

const h1 = document.querySelector('h1')
const cardContainer = document.getElementById('card-container')
const workH2 = document.querySelector('.work-h2')

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



import { projectData } from "./project-data.js"


let projectMarkup = projectData.map(project =>
  `
    <div class="card text-center" style="width: 18rem;">
      <img src="${project.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <div>
          <a href="${project.github}" class="btn btn-primary">GitHub</a>
          <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
        </div>
      </div>
    </div>
  `  
).join('')

cardContainer.innerHTML = projectMarkup

console.log(workH2)