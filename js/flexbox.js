const productos = [
    "Caja 1",
    "Caja 2",
    "Caja 3",
    "Caja 4",
    "Caja 5",
    "Caja 6"
];

const contenedor = document.querySelector(".contenedor-flex");

function render() {
    contenedor.innerHTML = "";

    productos.forEach((p) => {
        const div = document.createElement("div");
        div.classList.add("caja");
        div.textContent = p;
        contenedor.appendChild(div);
    });
}

render();

// interacción simple: mezclar orden
function mezclar() {
    productos.sort(() => Math.random() - 0.5);
    render();
}