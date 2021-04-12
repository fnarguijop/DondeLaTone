const formulario = document.getElementById('form');

function loadFunctions() {
    previewRes();
    changePrice();
}

function previewRes() {
    let preparacion = formulario['preparacion'];
    let acompañante = formulario['acompañante'];
    if (preparacion.value == 'guisada') {
        document.getElementById('descripcion').innerHTML = `Un trozo de carne de res guisada acompañada de ${acompañante.value}.`;
    } else {
        document.getElementById('descripcion').innerHTML = `Un trozo de carne de res tipica acompañado de ${acompañante.value}.`;
    }
    document.getElementById('message').style.display = 'flex';
}

function changePrice() {
    if (acompañante.value == 'papas') {
        document.getElementById('precio').innerHTML = `L 140.00`
    } else if(acompañante.value == 'tajadas') {
        document.getElementById('precio').innerHTML = `L 120.00`;
    } else {
        document.getElementById('precio').innerHTML = 'L 100.00';
    }
    document.getElementById('message').style.display = 'flex';
}