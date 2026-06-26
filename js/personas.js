const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Carlos", edad: 22 },
    { nombre: "Lucía", edad: 28 }
];

const contenedor = document.getElementById("lista-personas");

personas.forEach(persona => {
    const div = document.createElement("div");
    div.classList.add("persona");

    div.innerHTML = `
        <h3>${persona.nombre}</h3>
        <p>Edad: ${persona.edad}</p>
    `;

    contenedor.appendChild(div);
});