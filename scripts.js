const DEFAULT_GRID_SIZE = 16;
const MAX_FIELD_SIZE = 100;
const container = document.querySelector("#container");

const pixel = document.createElement("div");
pixel.classList.add("pixel");


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
createGrid();