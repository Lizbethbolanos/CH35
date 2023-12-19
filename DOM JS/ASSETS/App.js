const botonRandom = document.getElementById("btn");
const botonReset = document.getElementById("reset");
const colorFondo = document.body.style.backgroundColor;

const random = (number) => {
    return Math.floor(Math.random() * (number + 1));
}

botonRandom.addEventListener("click", () => {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColor;
});

// -- botón de RESET
botonReset.addEventListener("click", () => {
    document.body.style.backgroundColor = colorFondo;
});