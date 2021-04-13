const FORMULARIO = document.forms['form'];
let preparacion = FORMULARIO['preparacion'];
let cantidad = FORMULARIO['cantidad'];

function showChanges() {
    if (cantidad.value == 'Un') document.getElementById('descripcion').innerHTML = `${cantidad.value} delicioso taco de ${preparacion.value}.`;
    else document.getElementById('descripcion').innerHTML = `${cantidad.value} deliciosos tacos de ${preparacion.value}.`;
    changePrice();
    document.getElementById('message').style.display = 'flex';
}

function changePrice() {
    let precio = 0;
    if (preparacion.value == 'pollo') {
        if (cantidad.value == 'Un') precio = 30;
        else if (cantidad.value == 'Dos') precio = 60;
        else if (cantidad.value == 'Tres') precio = 80;
        else precio = 100;
    } else {
        if (cantidad.value == 'Un') precio = 35;
        else if (cantidad.value == 'Dos') precio = 70;
        else if (cantidad.value == 'Tres') precio = 90;
        else precio = 110;
    }
    document.getElementById('precio').innerHTML = `L ${precio}.00`;
}