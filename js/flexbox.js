const productos = [
    "Caja 1",
    "Caja 2",
    "Caja 3",
    "Caja 4",
    "Caja 5",
    "Caja 6"
];

const contenedor = document.querySelector(".contenedor-flex");

// renderiza las cajas en pantalla
function render() {
    contenedor.innerHTML = "";

    productos.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("caja");
        div.textContent = item;
        contenedor.appendChild(div);
    });
}

// función inicial
render();

// botón: mezclar cajas
function mezclar() {
    productos.sort(() => Math.random() - 0.5);
    render();
}