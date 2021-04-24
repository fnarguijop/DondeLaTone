// Selectores
const buttonCart = document.querySelector('.form__cart');
const nombre = document.querySelector('.name');
const descripcion = document.querySelector('.plate-description');
const extras = document.querySelector('.extras');
const precio = document.querySelector('.price');
const cantidadPlatillos = document.querySelector('.quantity');

/* Se obtiene la categoria del plato */
const bannerInfo = document.querySelector('.banner-info');
const bannerLinks = bannerInfo.children[0].innerText.split('/');
const plateCategory = bannerLinks[2];
console.log(plateCategory)
// Eventos
buttonCart.addEventListener('click', addToCarrito);

/* Arreglo que sera agregado al almacenamiento local */
let platillosToStore;
// Funciones
function addToCarrito() {
    /* Se llama a una funcion que compruebe si ya existe el arreglo en el almacenamiento local */
    isPlatilloStored();
    /* Se agrega al arreglo platillos una instancia de la clase PlatillosComprados */
    platillosToStore.push(new PlatillosComprados(nombre.innerText, descripcion.innerText, extras.innerText, precio.innerText, cantidadPlatillos.value, plateCategory));
    localStorage.setItem('platillosToStore', JSON.stringify(platillosToStore));
    console.log(platillosToStore);
    document.querySelector('.added__message').style.display = 'block';
}
/* Funcion para revisar si ya existia un arreglo en el almacenamiento local con contenido agregado en previas visitas al sitio */
function isPlatilloStored() {
    /* En caso de que el arreglo no exista o no se haua creado antes, entonces se crea como un array vacio */
    if (localStorage.getItem('platillosToStore') === undefined || localStorage.getItem('platillosToStore') === null) {
        platillosToStore = [];
    }
    /* Si ya existia entonces se obtiene y se almacena en un arreglo con el mismo nombre */
    else {
        platillosToStore = JSON.parse(localStorage.getItem('platillosToStore'));
    }
    /* La funcion retorna como valor el arreglo, ya sea vacio o con los valores previos */
    return platillosToStore;
}