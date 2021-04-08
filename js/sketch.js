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
const changeColorBtn = document.createElement("button");
changeColorBtn.textContent = "Change Color";
gridContainer.appendChild(changeColorBtn);
changeColorBtn.addEventListener("click", changeColor);
function changeColor() {
  for (i = 0; i < col.length; i++) {
    col[i].addEventListener("mouseover", (e) => {
      e.target.style.background = "red";
    });
  }
}

/* button for resetColor function */
const resetColorBtn = document.createElement("button");
resetColorBtn.textContent = "reset color";
gridContainer.append(resetColorBtn);
resetColorBtn.addEventListener("click", resetColor);
//resetColor function
function resetColor() {
  cols = document.querySelectorAll(".colCell");
  for (i = 0; i < cols.length; i++) {
    cols[i].style.background = "";
  }
}
/* function to get input for the output of the the number of grids */
//button for promt question
const createGridbtn = document.createElement("button");
createGridbtn.textContent = `grid size ?`;
gridContainer.appendChild(createGridbtn);
createGridbtn.addEventListener("click", createGrid);

/* function to create Grid */
function createGrid() {
  userChoice = parseInt(window.prompt("Choose grid size between 1-16"));
  if (userChoice > 64) return;
  makeRows(userChoice);
  makeCols(userChoice);
}

//creal the grid from the DOM
const clrBtn = document.createElement("button");
clrBtn.textContent = "Clear the grid";
gridContainer.appendChild(clrBtn);
clrBtn.addEventListener("click", clearGrid);
function clearGrid() {
  colm = document.querySelectorAll(".colCell");
  rows = document.querySelectorAll(".rowCell");
  for (i = 0; i < colm.length; i++) {
    colm[i].remove();
  }
  for (i = 0; i < rows.length; i++) {
    rows[i].remove();
  }
}
//createGrid();
//changeColor();
//resetColor();
//clearGrid();
