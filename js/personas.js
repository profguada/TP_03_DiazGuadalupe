const form = document.getElementById("form-persona");
const tabla = document.querySelector("#tabla-personas tbody");

function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const imc = calcularIMC(peso, altura);

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
        <td>${altura}</td>
        <td>${peso}</td>
        <td>${imc}</td>
        <td><button class="eliminar">Eliminar</button></td>
    `;

    tabla.appendChild(fila);

    form.reset();
});

tabla.addEventListener("click", function (e) {
    if (e.target.classList.contains("eliminar")) {
        e.target.parentElement.parentElement.remove();
    }
});