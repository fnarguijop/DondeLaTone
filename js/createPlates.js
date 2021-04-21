/* Funcion para mostrar los objetos(platillos) almacenados localmente, en el carrito */
function showPlatillos() {
    if (window.localStorage.length > 0) {
        /* Se oculta el mensaje inicial de la pagina de carrito */
        document.getElementById('initial-message').style.display = 'none';
        /* Se vuelve al estado inicial el array en localStorage, pasa de ser un array con dos objetos a un string para ser almacenado en el localStorage y parse vuelve al estado inicial, es decir a un array con dos objetos */
        const platillosToStoreToArray = JSON.parse(window.localStorage['platillosToStore']);

        if (platillosToStoreToArray.length > 0) {
            platillosToStoreToArray.forEach(platillo => {
                /* Se almacena al contendor de todos los platillos */
                let platesContainer = document.querySelector('.shopped');

                /* Se crea el shopped__plate */
                const plateContainer = document.createElement('div');
                plateContainer.classList.add('shopped__plate');
                platesContainer.appendChild(plateContainer);

                // CONTENEDOR 1
                /* Se crea el shopped__plate--image-container */
                const imageTitleContainer = document.createElement('div');
                imageTitleContainer.classList.add('shopped__plate--image-container');
                plateContainer.appendChild(imageTitleContainer);

                /* Se crea la imagen dependiendo del palto que se haya pedido */
                const plateImage = document.createElement('img');
                if (platillo._nombre === 'Costilla de cerdo') {
                    plateImage.src = '/images/03-costilla_de_cerdo.jpg';
                } else if (platillo._nombre === 'Pollo') {
                    plateImage.src = '/images/02-pollo_a_la_plancha.jpg';
                } else if (platillo._nombre === 'Carne de Res') {
                    plateImage.src = '/images/01-carne_de_res.jpg';
                } else if (platillo._nombre === 'Fingers o Alitas') {
                    plateImage.src = '/images/06-fingers_wingers.jpg';
                } else if (platillo._nombre === 'Nachos') {
                    plateImage.src = '/images/05-nachos.jpg';
                } else if (platillo._nombre === 'Tacos Flauta') {
                    plateImage.src = '/images/04-tacos_flauta.jpg';
                } else if (platillo._nombre === 'Cena') {
                    plateImage.src = '/images/08-cena_tipica.jpg';
                } else {
                    plateImage.src = '/images/07-pupusas.jpg';
                }
                plateImage.classList.add('shopped__plate--image');
                imageTitleContainer.appendChild(plateImage);

                /* Se crea el nombre del plato */
                const plateName = document.createElement('h2');
                plateName.classList.add('shopped__name');
                plateName.innerText = platillo._nombre;
                imageTitleContainer.appendChild(plateName);


                //CONTENEDOR 2
                /* Se crea el contenedor de la informacion del plato */
                const plateInfoContainer = document.createElement('div');
                plateInfoContainer.classList.add('shopped__plate--info');
                plateContainer.appendChild(plateInfoContainer);

                /* Se crea el titulo descripcion dentro de la informacion del plato */
                const plateDescriptionTitle = document.createElement('h3');
                plateDescriptionTitle.classList.add('shopped__description--title');
                plateDescriptionTitle.innerText = 'Descripción';
                plateInfoContainer.appendChild(plateDescriptionTitle);

                /* Se crea la descripcion del plato */
                const plateDescription = document.createElement('p');
                plateDescription.classList.add('shopped__description');
                plateDescription.title = 'Descripción';
                plateDescription.innerText = platillo._descripcion;
                plateInfoContainer.appendChild(plateDescription);

                /* Se crea el titulo de los extras */
                const plateExtrasTitle = document.createElement('h3');
                plateExtrasTitle.classList.add('shopped__extras--title');
                plateExtrasTitle.innerText = 'Acompañantes opcionales';
                plateInfoContainer.appendChild(plateExtrasTitle);

                /* Se crea el parrafo con los extras */
                const plateExtras = document.createElement('p');
                plateExtras.classList.add('shopped__extras');
                plateExtras.title = 'Extras';
                let extras = platillo._extras;
                let extrasArray = extras.split(' ');
                extrasArray.forEach(extra => {
                    plateExtras.innerHTML += `<span>${extra}</span>`;
                });

                plateInfoContainer.appendChild(plateExtras);


                // CONTENEDOR 3
                /* Se crea el contenedor de el precio del plato y los botones de cantidad y eliminar */
                const platePriceConfigContainer = document.createElement('div');
                platePriceConfigContainer.classList.add('shopped__plate--price-config');
                plateContainer.appendChild(platePriceConfigContainer);

                /* Se crea el contenedor del precio del plato */
                const platePriceContainer = document.createElement('div');
                platePriceContainer.classList.add('shopped__plate--price-container');
                platePriceConfigContainer.appendChild(platePriceContainer);

                /* Se crea el elemento p con el precio */
                const platePrice = document.createElement('p');
                platePrice.classList.add('shopped--price');
                let total = 0;
                total = parseInt(platillo._precio.replace('L','').replace('.00','')) * parseInt(platillo._cantidad);
                platePrice.innerText = `L ${total}.00`;
                platePriceContainer.appendChild(platePrice);

                /* Se crea el contenedor de los botones de configuracion */
                const plateConfigContainer = document.createElement('div');
                plateConfigContainer.classList.add('shopped__plate-config');
                platePriceConfigContainer.appendChild(plateConfigContainer);

                /* Se crea el input para la cantidad de platos */
                const plateQuantity = document.createElement('p');
                plateQuantity.innerText = platillo._cantidad;
                plateQuantity.title = 'Cantidad';
                plateQuantity.classList.add('shopped__input')
                plateConfigContainer.appendChild(plateQuantity);

                /* Se crea el boton para eliminar el elemento */
                const plateDeleteButton = document.createElement('button');
                plateDeleteButton.classList.add('shopped__button');
                plateDeleteButton.title = 'Eliminar';
                plateDeleteButton.innerHTML = '<i class="fa fa-trash"></i>'
                plateConfigContainer.appendChild(plateDeleteButton);

                /* Evento cuando se le de click al plato en el carrito, este ejecuta la funcion deletePlate */
                plateContainer.addEventListener('click', deletePlate);
            });
        }
        /* Se manda a llamar a la funcion que realizara la suma de todos los platillos añadidos */
        obtenerTotalPlatillos();
    }


}


function obtenerTotalPlatillos() {
    /* Se obtienen todos los precios de todos los platillos y se almacenan en una variable que toma el tipo de dato de objeto */
    const allPrices = document.querySelectorAll('p.shopped--price');
    /* Se declara una variable de tipo Number en la que se almacenara el valor de la suma de todos los precios */
    let total = 0;
    /* Se recorre el objeto con todos los precios con un forEach y se le pasa como parametro price que tomara el valor del precio de cada plato */
    allPrices.forEach(price => {
        /* Se elimina la L y .00 del precio y se convierte en un numero almacenado en la variable priceInt */
        priceInt = Number(price.innerText.replace('L', '').replace('.00', ''));
        /* Se van concatenando las sumas de los precios en la variable total, demodo que total valla cambiando su valor en cada iteracion */
        total += parseInt(priceInt);
    });
    /* Se obtiene el elemento que contiene el total de la compra */
    const totalPlatillos = document.querySelector('.total__number');
    /* Se introduce el total calculado */
    totalPlatillos.innerText = total;
}

/* Funcion para eliminar todos los platillos guardados */
function limpiarCarrito() {
    /* Se limpia el local storage con el metodo clear */
    localStorage.clear();
    /* Se recarga la pagina para que se establezcan los cambios y se vuelva a mostrar el mensaje inicial de la pagina de carrito */
    location.reload();
}


// Funciones
/* Funcion para eliminar el platillo que desencadeno el evento */
function deletePlate(e) {
    const buttonClicked = e.target;
    const buttonContainer = buttonClicked.parentElement;
    const platePriceConfig = buttonContainer.parentElement;
    const plateContainer = platePriceConfig.parentElement;
    if (buttonClicked.classList.contains('shopped__button')) {
        /* Se le agrega una clase para animar la manera en la que el elemento se elimina */
        plateContainer.classList.add('remove-plate');
        /* Evento que ejecuta una funcion cuando se termine de ejecutar una transicion */
        plateContainer.addEventListener('transitionend', () => {
            plateContainer.remove();
            deleteFromLocalStorage(plateContainer);
        })
    }
}

function deleteFromLocalStorage(plateToDelete) {
    /* Se accede al nombre del platillo que se desea eliminar */
    const plateName = plateToDelete.children[0].children[1].innerText;
    /* Se almacena en una variable el arreglo del local storage con los objetos creados(platillos añadidos) */
    const platillosToStoreToArray = JSON.parse(window.localStorage['platillosToStore']);

    /* Se recorre el arreglo y para cada objeto se realiza una comprobacion */
    platillosToStoreToArray.forEach((platillo) => {
        /* Si el nombre del objeto actual es igual al nombre del objeto que se desea eliminar */
        if (plateName === platillo._nombre) {
            /* Entonces se utiliza el metodo splice para remover un elemento de un array y se especifica el elemento a remover y la cantidad de elementos sucesivos a ese */
            platillosToStoreToArray.splice(platillosToStoreToArray.indexOf(platillo), 1);
            /* se accede al indice del platillo que se desea eliminar para que se pueda splice out */

            /* Se reescriben los datos del array en el local storage con la modificacion aplicada */
            localStorage.setItem('platillosToStore', JSON.stringify(platillosToStoreToArray));
        }
    });

    /* Si despues de eliminar el array que contiene los objetos(platillos agregados) vuelve a medir 0 es decir que no cuenta con ningun elemento */
    if(platillosToStoreToArray.length == 0) {
        /* Se vuelve a mostrar el mensaje inicial de la pagina de carrito */
        document.getElementById('initial-message').style.display = 'block';
    }

    /* Se vuelve a realizar la suma de todos los platillos */
    obtenerTotalPlatillos();
    /* Se refresca para que se muestren los cambios de la suma */
    location.reload()
}