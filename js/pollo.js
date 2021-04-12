const formulario = document.getElementById('form');

function loadFunctions() {
    previewPollo();
    changePrice();
}

function previewPollo() {
    let preparacion = formulario['preparacion'];
    let acompañante = formulario['acompañante'];
    if (preparacion.value == 'empanizado') {
        document.getElementById('descripcion').innerHTML = `Pollo empanizado acompañado de ${acompañante.value}.`;
    } else {
        document.getElementById('descripcion').innerHTML = `Pollo a la plancha acompañado de ${acompañante.value}.`;
    }
    document.getElementById('message').style.display = 'flex';
}

function changePrice() {
    if (acompañante.value == 'papas') {
        document.getElementById('precio').innerHTML = `L 140.00`
    } else {
        document.getElementById('precio').innerHTML = `L 120.00`;
    }
    document.getElementById('message').style.display = 'flex';
}