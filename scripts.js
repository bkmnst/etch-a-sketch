const DEFAULT_GRID_SIZE = 16;
const container = document.querySelector("#container");

const pixel = document.createElement("div");
pixel.classList.add("pixel");


// Fill the grid field

function createGrid(gridSize) {

    for (let i = 0; i < gridSize * gridSize; i++) {
        const clonedPixel = pixel.cloneNode(true);
        
        const percentageSize = 100 / gridSize;
        clonedPixel.style.width = `${percentageSize}%`
        clonedPixel.style.height = `${percentageSize}%`

        clonedPixel.addEventListener("mouseenter", (event) => {
            event.target.classList.add("colored");
        });

        container.appendChild(clonedPixel);
    }
}

createGrid(36);