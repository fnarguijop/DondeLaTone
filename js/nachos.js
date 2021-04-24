const FORMULARIO = document.getElementById('form');
let preparacion = FORMULARIO['preparacion'];
let tamaño = FORMULARIO['tamaño'];

function showChanges() {
    let precio = 0;
    document.getElementById('descripcion').innerHTML = `Deliciosas tortillitas tostadas con ${preparacion.value}.`;
    if (preparacion.value == 'res' && tamaño.value == 'mediano' || preparacion.value == 'pollo' && tamaño.value == 'grande') precio = 90; /* Si es nacho de res mediano y si es nacho de pollo grande */
    else if (preparacion.value == 'res' && tamaño.value == 'grande') precio = 100; /* Si es nacho de res grande */
    else precio = 80; /* Si es nacho de pollo y mediano */
    document.getElementById('precio').innerHTML = `L ${precio}.00`;
    document.getElementById('message').style.display = 'flex';
}