const DEFAULT_GRID_SIZE = 16;
const MAX_FIELD_SIZE = 100;
const container = document.querySelector("#container");

const pixel = document.createElement("div");


// Fill the grid field

function createGrid(gridSize = DEFAULT_GRID_SIZE) {

    for (let i = 0; i < gridSize * gridSize; i++) {
        const clonedPixel = pixel.cloneNode(true);

        let percentageSize = MAX_FIELD_SIZE / gridSize;
        clonedPixel.style.width = `${percentageSize}%`
        clonedPixel.style.height = `${percentageSize}%`

        clonedPixel.addEventListener("mouseenter", (event) => {
            event.target.classList.add("colored");
        });

        container.appendChild(clonedPixel);
    }
}

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getGridSize() {
    let userInput = prompt("Enter desired pixel density (100px max)");
    return Number(userInput);
}

const getGridSizeButton = document.querySelector("#get-gridsize");
getGridSizeButton.addEventListener("click", () => {
    let newGridSize = getGridSize();
    if (newGridSize > 100 || newGridSize < 1 || isNaN(newGridSize)) {
        alert("Invalid input.");
    } else {
        deleteGrid();
        createGrid(newGridSize);
    }
})

createGrid();