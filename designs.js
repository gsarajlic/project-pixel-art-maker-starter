// Select color input
// Select size input
const color = document.querySelector('#colorPicker');
const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
const table = document.querySelector('#pixelCanvas');

console.log (gridWidth);
console.log (gridHeight);

const pressedButton = document.querySelector('#submit');
// When size is submitted by the user, call makeGrid()
pressedButton.addEventListener('click', function (reset) {
  reset.preventDefault();
  makeGrid();
})


function makeGrid(){
    let height = gridHeight.value;
    let width = gridWidth.value;
    table.innerHTML='';
    for (var i = 0; i < height; i++){
        const tr = document.createElement('tr');
        table.appendChild(tr);
            for (var j = 0; j < width; j++){
                const td = document.createElement('td');
                tr.appendChild(td);
                }
        }

    table.addEventListener('click', function(coloring){
      coloring.preventDefault();
      coloring.target.style.backgroundColor = color.value;
    })

}
