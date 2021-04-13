const FORMULARIO = document.getElementById('form');
let preparacion = FORMULARIO['preparacion'];
let acompañante = FORMULARIO['acompañante'];

function showChanges() {
    let precio = 0;
    if(acompañante.value == 'papas') precio = 140;
    else precio = 120;
    document.getElementById('precio').innerHTML = `L ${precio}.00`;
    document.getElementById('descripcion').innerHTML = `Pollo ${preparacion.value}, acompañado de ${acompañante.value}.`;
    document.getElementById('message').style.display = 'flex';
}
