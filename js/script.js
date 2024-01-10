/* Recupero gli elementi */

const formElement = document.getElementById('form')
const selectElement = document.getElementById('select')

const gridElement = document.getElementById('grid')

/* Dati di partenza*/

const rows = 10
const cols = 10
totalCells = rows*cols

for(let i = 0; i<totalCells; i++){
    const newCell = document.createElement('div')
    newCell.className = 'cell c-100 '
    gridElement.appendChild(newCell)
    newCell.innerText = i+1
}

formElement.addEventListener('submit', (e) => {
    e.defaultPrevented()


})