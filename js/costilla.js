const FORMULARIO = document.forms['form'];
let preparacion = FORMULARIO['preparacion'];
let acompañante = FORMULARIO['acompañante'];

function showChanges() {
    let precio = 0;
    document.getElementById('descripcion').innerHTML = `Costilla de cerdo ${preparacion.value}, acompañada de ${acompañante.value}.`;
    if(acompañante.value == 'papas') precio = 140;
    else precio = 120;
    document.getElementById('precio').innerHTML = `L ${precio}.00`;
    document.getElementById('message').style.display = 'flex';
}