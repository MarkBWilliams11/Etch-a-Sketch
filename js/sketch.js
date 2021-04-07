//Grid Container
const gridContainer = document.querySelector("#gridContainer");
//row
const row = document.getElementsByClassName("rowCell");
//coloumn
const col = document.getElementsByClassName("colCell");
//

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
    }
  }
}
/* function to change color og grid */
function changeColor() {
  const changeColorBtn = document.createElement("button");
  changeColorBtn.textContent = "Change Color";
  gridContainer.appendChild(changeColorBtn);
  changeColorBtn.addEventListener("click", () => {
    for (i = 0; i < col.length; i++) {
      col[i].addEventListener("mouseover", (e) => {
        e.target.style.background = "red";
      });
    }
  });
}

function resetColor() {
  const resetColorBtn = document.createElement("button");
  resetColorBtn.textContent = "reset color";
  gridContainer.append(resetColorBtn);
  resetColorBtn.addEventListener("click", () => {
    cols = document.querySelectorAll(".colCell");
    for (i = 0; i < cols.length; i++) {
      cols[i].style.background = "";
    }
  });
}
/* function to get input for the output of the the number of grids */
//button
const createGridbtn = document.createElement("button");
createGridbtn.textContent = `Grid Size ?`;
gridContainer.appendChild(createGridbtn);

/* function to create Grid */
createGridbtn.addEventListener("click", createGrid);
function createGrid() {
  userChoice = parseInt(window.prompt("Grid size?"));
  if (userChoice > 16) return;
  makeRows(userChoice);
  makeCols(userChoice);
}

//creal the grid from the DOM
const clrBtn = document.createElement("button");
clrBtn.textContent = "Clear the grid";
gridContainer.appendChild(clrBtn);
clrBtn.addEventListener("click", clearGrid);
function clearGrid() {
  makeCols();
  makeRows();
}
//createGrid();
changeColor();
resetColor();
//clearGrid();
