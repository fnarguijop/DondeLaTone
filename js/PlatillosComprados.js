class PlatillosComprados {
    static contadorPlatillosComprados = 0;
    /* Constructor con todas las propiedades necesarias de los platillos comprados */
    constructor(nombre, descripcion, extras, precio, cantidad) {
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._extras = extras;
        this._precio = precio;
        this._cantidad = cantidad;
        /* ID unico para cada platillo comprado */
        this._id = ++PlatillosComprados.contadorPlatillosComprados;
    }
}

