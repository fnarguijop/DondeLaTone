const FORMULARIO = document.forms['form'];
let tamaño = FORMULARIO['tamaño'];
let preparacion = FORMULARIO['preparacion'];
let tipo = FORMULARIO['tipo'];
let acompañante = FORMULARIO['acompañante'];

function showChanges() {
    document.getElementById('descripcion').innerHTML = `${tamaño.value} ${tipo.value} bañadas con salsa ${preparacion.value} y acompañadas de ${acompañante.value}.`;
    changePrice();
    document.getElementById('message').style.display = 'flex';
}

function changePrice() {
    let precio = 0;
    switch (tamaño.value) {
        case 'Doce':/* Si son doce ya sean alitas o fingers */
            if (acompañante.value == 'papas' && tipo.value == 'fingers' || acompañante.value == 'tajadas' && tipo.value == 'alitas') precio = 150; /* Si son alitas con tajadas o fingers con papas */
            else if (acompañante.value == 'tajadas' && tipo.value == 'fingers') precio = 140;/* Si son fingers con tajadas */
            else precio = 160;/* Si son alitas con papas */
            break;
        default:/* Si son ocho ya sean alitas o fingers */
            if (acompañante.value == 'papas' && tipo.value == 'fingers') precio = 100; /* Si son fingers con papas */
            else if (acompañante.value == 'tajadas' && tipo.value == 'fingers') precio = 90; /* Si son fingers con tajadas */
            else if (acompañante.value == 'papas' && tipo.value == 'alitas') precio = 120; /* Si son alitas con papas */
            else precio = 110; /* Si son alitas con tajadas */
            break;
    }
    document.getElementById('precio').innerHTML = `L ${precio}.00`;
}