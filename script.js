let container = document.querySelector("#container");

let gridSize = 16;

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < gridSize; j++) {
            let square = document.createElement("div");
            square.className = "square";
            row.appendChild(square);
            square.addEventListener("mouseover", (e) => {
                square.style.backgroundColor = "black";
            });
        }
        container.appendChild(row);
    }
}

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

createGrid();

let button = document.querySelector("button");
button.addEventListener("click", (e) => {
    do {
        gridSize = prompt("Enter grid size between 16 and 100 inclusive");
    }
    while (gridSize == undefined || gridSize < 16 || gridSize > 100);
    deleteGrid();
    createGrid();
});