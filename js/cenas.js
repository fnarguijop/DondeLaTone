const FORMULARIO = document.forms['form'];
let acompañante = FORMULARIO['acompañante'];
let tipoHuevo = FORMULARIO['tipo-huevo'];

function showChanges() {
    let precio = 0;
    document.getElementById('descripcion').innerHTML = `Una rica cena con huevo ${tipoHuevo.value} acompañada de ${acompañante.value}.`;
    if(acompañante.value !== 'tortillas') precio = 80;
    else precio = 60;
    document.getElementById('precio').innerHTML = `L ${precio}.00`;
    document.getElementById('message').style.display = 'flex';
}
