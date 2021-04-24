const FORMULARIO = document.forms['form'];
let cantidad = FORMULARIO['cantidad'];
let tipo = FORMULARIO['tipo'];

function showChanges() {
    if (cantidad.value == 'Una') document.getElementById('descripcion').innerHTML = `${cantidad.value} deliciosa pupusa ${tipo.value}.`;
    else document.getElementById('descripcion').innerHTML = `${cantidad.value} deliciosas pupusas ${tipo.value}.`;
    changePrice();
    document.getElementById('message').style.display = 'flex';
}

function changePrice() {
    let precio = 0;
    if (tipo.value == 'mixta') {
        switch (cantidad.value) {
            case 'Una':
                precio = 30;
                break;
            case 'Dos':
                precio = 60;
                break;
            case 'Tres':
                precio = 90;
                break;
            case 'Cuatro':
                precio = 110;
                break;
        }
    } else {
        switch (cantidad.value) {
            case 'Una':
                precio = 20;
                break;
            case 'Dos':
                precio = 40;
                break;
            case 'Tres':
                precio = 60;
                break;
            case 'Cuatro':
                precio = 80;
                break;
        }
    }
    document.getElementById('precio').innerHTML = `L ${precio}.00`;
}