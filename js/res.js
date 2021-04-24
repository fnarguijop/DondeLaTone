const FORMULARIO = document.forms['form'];
let preparacion = FORMULARIO['preparacion'];
let acompañante = FORMULARIO['acompañante'];

function showChanges() {
    let precio = 0;
    if (acompañante.value == 'papas') precio = 140;
    else if (acompañante.value == 'tajadas') precio = 120;
    else precio = 100;
    document.getElementById('precio').innerHTML = `L ${precio}.00`;
    document.getElementById('descripcion').innerHTML = `Un trozo de carne de res ${preparacion.value} acompañada de ${acompañante.value}.`;
    document.getElementById('message').style.display = 'flex';
}