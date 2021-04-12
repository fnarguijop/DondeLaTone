const formulario = document.forms['form'];

function loadFunctions() {
    previewCostilla();
    changePrice();
}

function previewCostilla() {
    let preparacion = formulario['preparacion'];
    if(preparacion.value == 'bbq') {
        document.getElementById('descripcion').innerHTML = `Costilla de cerdo bañada en salsa bbq acompañada de ${acompañante.value}.`;
    }
    else {
        document.getElementById('descripcion').innerHTML = `Costilla de cerdo acompañada de ${acompañante.value}.`;
    }
    document.getElementById('message').style.display = 'flex';
}

function changePrice() {
    let acompañante = formulario['acompañante'];
    if(acompañante.value == 'papas') {
        document.getElementById('precio').innerHTML = `L 140.00`
    }
    else {
        document.getElementById('precio').innerHTML = `L 120.00`;
    }
    document.getElementById('message').style.display = 'flex';
}