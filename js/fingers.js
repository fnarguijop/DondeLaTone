const formulario = document.forms['form'];

function loadFunctions() {
    previewFingers();
    changePrice();
}

function previewFingers() {
    let preparacion = formulario['preparacion'];
    let tamaño = formulario['tamaño'];
    let tipo = formulario['tipo'];
    document.getElementById('descripcion').innerHTML = `${tamaño.value} ${tipo.value} bañadas con salsa ${preparacion.value} y acompañadas de ${acompañante.value}.`;
    document.getElementById('message').style.display = 'flex';
}

function changePrice() {
    let acompañante = formulario['acompañante'];
    if(tipo.value == 'fingers') {
        if(tamaño.value == 'Ocho') {
            if(acompañante.value == 'papas') {
                document.getElementById('precio').innerHTML = 'L 100.00';
            }
            else {
                document.getElementById('precio').innerHTML = 'L 90.00';
            }
        }
        else {
            if(acompañante.value == 'papas') {
                document.getElementById('precio').innerHTML = 'L 150.00';
            }
            else {
                document.getElementById('precio').innerHTML = 'L 140.00';
            }
        }
    }
    else {
        if(tamaño.value == 'Ocho') {
            if(acompañante.value == 'papas') {
                document.getElementById('precio').innerHTML = 'L 120.00';
            }
            else {
                document.getElementById('precio').innerHTML = 'L 100.00';
            }
        }
        else {
            if(acompañante.value == 'papas') {
                document.getElementById('precio').innerHTML = 'L 160.00';
            }
            else {
                document.getElementById('precio').innerHTML = 'L 150.00';
            }
        }
    }
    document.getElementById('message').style.display = 'flex';
}