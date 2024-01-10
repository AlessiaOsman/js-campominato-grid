/* Recupero gli elementi */

const formElement = document.getElementById('form')
const selectElement = document.getElementById('select')

const gridElement = document.getElementById('grid')

/* Dati di partenza*/

const rows = 10
const cols = 10
const totalCells = rows*cols
let className = 'c-100'

for(let i = 0; i<totalCells; i++){

    const cell = createCell(className)

    cell.addEventListener('click', ()=>{
        cell.classList.add('clicked')
    })

    gridElement.appendChild(cell)
    cell.innerText = i+1
}
