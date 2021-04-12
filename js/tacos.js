const formulario = document.getElementById('form');

function loadFunctions() {
    previewTaco();
    changePrice();
}

function previewTaco() {
    let preparacion = formulario['preparacion'];
    let cantidad = formulario['cantidad'];
    if (cantidad.value == 'Un') {
        document.getElementById('descripcion').innerHTML = `${cantidad.value} delicioso taco de ${preparacion.value}.`;
    }
    else {
        document.getElementById('descripcion').innerHTML = `${cantidad.value} deliciosos tacos de ${preparacion.value}.`;
    }
    document.getElementById('message').style.display = 'flex';
}

function changePrice() {
    if (preparacion.value == 'pollo') {
        if (cantidad.value == 'Un') {
            document.getElementById('precio').innerHTML = `L 30.00`;
        } else if (cantidad.value == 'Dos') {
            document.getElementById('precio').innerHTML = `L 60.00`;
        } else if (cantidad.value == 'Tres') {
            document.getElementById('precio').innerHTML = 'L 80.00';
        } else {
            document.getElementById('precio').innerHTML = 'L 100.00';
        }
    } else {
        if (cantidad.value == 'Un') {
            document.getElementById('precio').innerHTML = 'L 35.00';
        } else if (cantidad.value == 'Dos') {
            document.getElementById('precio').innerHTML = 'L 70.00'
        } else if (cantidad.value == 'Tres') {
            document.getElementById('precio').innerHTML = 'L 90.00';
        } else {
            document.getElementById('precio').innerHTML = 'L 110.00';
        }
    }
    document.getElementById('message').style.display = 'flex';
}