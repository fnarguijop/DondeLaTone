const formulario = document.forms['form'];

function loadFunctions() {
    previewPupusas();
    changePrice();
}

function previewPupusas() {
    let cantidad = formulario['cantidad'];
    let tipo = formulario['tipo'];
    if(cantidad.value == 'Una') {
        document.getElementById('descripcion').innerHTML = `${cantidad.value} deliciosa pupusa ${tipo.value}.`;
    }
    else {
        document.getElementById('descripcion').innerHTML = `${cantidad.value} deliciosas pupusas ${tipo.value}.`;
    }
    document.getElementById('message').style.display = 'flex';
}

function changePrice() {
    if(tipo.value == 'mixta') {
        switch(cantidad.value) {
            case 'Una':
                document.getElementById('precio').innerHTML = 'L 30.00';
            break;
            case 'Dos':
                document.getElementById('precio').innerHTML = 'L 60.00';
            break;
            case 'Tres':
                document.getElementById('precio').innerHTML = 'L 90.00';
            break;
            case 'Cuatro':
                document.getElementById('precio').innerHTML = 'L 110.00';
            break;
        }
    }
    else {
        switch(cantidad.value) {
            case 'Una':
                document.getElementById('precio').innerHTML = 'L 20.00';
            break;
            case 'Dos':
                document.getElementById('precio').innerHTML = 'L 40.00';
            break;
            case 'Tres':
                document.getElementById('precio').innerHTML = 'L 60.00';
            break;
            case 'Cuatro':
                document.getElementById('precio').innerHTML = 'L 80.00';
            break;
        }
    }
    document.getElementById('message').style.display = 'flex';
}