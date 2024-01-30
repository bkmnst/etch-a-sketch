const container = document.querySelector("#container");

const squareDiv = document.createElement("div");
squareDiv.className = "pixel";

let gridSize = 16;
for (let i = 0; i < gridSize; i++) {
    container.appendChild(squareDiv.cloneNode(true));
}