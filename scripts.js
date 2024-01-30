const container = document.querySelector("#container");

const pixel = document.createElement("div");
pixel.className = "pixel";

let gridSize = 16;
for (let i = 0; i < gridSize; i++) {
    container.appendChild(pixel.cloneNode(true));
}