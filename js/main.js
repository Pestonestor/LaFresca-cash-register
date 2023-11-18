//show screen with selected table number
//TO DO  show selected table's current bill in adjacent screen (cuenta)

const selectedTable = document.createElement('div')
selectedTable.id='selectedTable'
selectedTable.innerHTML=`<div>MESA</div>
<div id='tableNumber'></div>
<div>Volver</div>`
document.querySelector('main').appendChild(selectedTable)
document.querySelector('#selectedTable>div:last-child').addEventListener('click', back_to_table_layout)

function select_table(){
  document.querySelector('#mesas').style.display='none'
  document.querySelector('#selectedTable').style.display='grid'
  document.querySelector('#tableNumber').innerHTML=event.target.dataset.value
}

function back_to_table_layout(){
  document.querySelector('#selectedTable').style.display='none'
  document.querySelector('#mesas').style.display='grid'
  
}


const tablePosition=['2/2','2/3','2/4','4/6/span2','2/6','1/6','4/2','4/3','4/4','5/4']
for(let i=1;i<11;i++){
  const table=document.createElement('div')
  table.id=`#table${i}`
  table.innerHTML=`Mesa${i}`
  table.style.gridArea =`${tablePosition[i-1]}`
  table.style.border='1px solid'
  table.addEventListener('click', select_table)
  table.setAttribute('data-value', i)
  document.querySelector('#mesas').appendChild(table)
}