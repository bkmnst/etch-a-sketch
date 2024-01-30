const container = document.querySelector("#container");

const pixel = document.createElement("div");
pixel.classList.add("pixel");


// Fill the grid field
let gridSize = 16;
for (let i = 0; i < gridSize * gridSize; i++) {
    const clonedPixel = pixel.cloneNode(true);
    clonedPixel.addEventListener("mouseenter", (event) => {
        event.target.classList.add("colored");
    });
    container.appendChild(clonedPixel);
}

