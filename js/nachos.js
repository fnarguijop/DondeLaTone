const formulario = document.getElementById('form');

function loadFunctions() {
    previewNachos();
    changePrice();
}

function previewNachos() {
    let preparacion = formulario['preparacion'];
    document.getElementById('descripcion').innerHTML = `Deliciosas tortillitas tostadas con ${preparacion.value}.`;
    document.getElementById('message').style.display = 'flex';
}

function changePrice() {
    let tamaño = formulario['tamaño'];
    if (preparacion.value == 'res') {
        if(tamaño.value == 'mediano') {
            document.getElementById('precio').innerHTML = 'L 90.00';
        }
        else {
            document.getElementById('precio').innerHTML = `L 100.00`
        }
    } else {
        if(tamaño.value == 'mediano') {
            document.getElementById('precio').innerHTML = 'L 80.00';
        }
        else {
            document.getElementById('precio').innerHTML = `L 90.00`;
        }
    }
    document.getElementById('message').style.display = 'flex';
}