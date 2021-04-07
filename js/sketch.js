//Grid Container
const gridContainer = document.querySelector("#gridContainer");
//row
const row = document.getElementsByClassName("rowCell");
//coloumn
const col = document.getElementsByClassName("colCell");

createGrid();
/* function to create Grid */
function createGrid() {
  makeRows(16);
  makeCols(16);
}

/* function to make rows */
function makeRows(rowNum) {
  for (i = 0; i < rowNum; i++) {
    let rowCell = document.createElement("div");
    rowCell.classList.add("rowCell");
    gridContainer.appendChild(rowCell);
  }
}

/* function to make cols */
function makeCols(colNum) {
  //We attach the  colNum to the rowsCell with row(which uses get class method)
  for (j = 0; j < row.length; j++) {
    //here we actually create the colCell
    for (i = 0; i < colNum; i++) {
      let colCell = document.createElement("div");
      colCell.classList.add("colCell");
      row[i].appendChild(colCell);
      colCell.addEventListener("mouseover", changeColor);
    }
  }
}
/* function to change color og grid */
function changeColor(e) {
  console.log((e.target.style.backgroundColor = "red"));
}
