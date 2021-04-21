// Arreglo con platillos en el carrito
let platillos = [];

// Selectores
const buttonCart = document.querySelector('.form__cart');
const nombre = document.querySelector('.name');
const descripcion = document.querySelector('.plate-description');
const extras = document.querySelector('.extras');
const precio = document.querySelector('.price');
const cantidadPlatillos = document.querySelector('.quantity');
// Eventos
buttonCart.addEventListener('click', addToCarrito);

// Funciones
function addToCarrito() {
    /* Se agrega al arreglo platillos una instancia de la clase PlatillosComprados */
    platillos.push(new PlatillosComprados(nombre.innerText, descripcion.innerText, extras.innerText, precio.innerText, cantidadPlatillos.value));
    addPlatilloToStorage(platillos);
    document.querySelector('.added__message').style.display = 'block';
}

/* Se declara el arreglo que sera almacenado localmente */
let platillosToStore;

/* Funcion para añadir los objetos(platillos) a el arreglo que sera almacenado localmente */
function addPlatilloToStorage(platillos) {
    /* Se llama a una funcion que compruebe si ya existe el arreglo en el almacenamiento local */
    isPlatilloStored();
    /* Se recorre el parametro(arreglo) recibido y se agrega cada objeto en el arreglo que sera almacenado localmente */
    platillos.forEach(platillo => {
        platillosToStore.push(platillo);
    });
    /* Se almacena el arreglo con los objetos localmente */
    localStorage.setItem('platillosToStore', JSON.stringify(platillosToStore));
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