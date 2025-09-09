// CONSTRUCTORES

// Clientes
class Cliente {
    constructor(id, nombre, direccion, saldo) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.saldo = saldo;
    }

    // GET y SET de id
    getId() {
        return this.id;
    }

    setId(nuevo_id) {
        this.id = nuevo_id;
    }

    // GET y SET de nombre
    getNombre() {
        return this.nombre;
    }

    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    // GET y SET de direccion
    getDireccion() {
        return this.direccion;
    }

    setDireccion(nueva_direccion) {
        this.direccion = nueva_direccion;
    }

    // GET y SET de saldo
    getSaldo() {
        return this.saldo;
    }

    setSaldo(nuevo_saldo) {
        this.saldo = nuevo_saldo;
    }

    infoDeCliente() {
        return `
        ID: ${this.id}\n
        Nombre: ${this.nombre}\n
        Direccion: ${this.direccion}\n
        Saldo: $${this.saldo}
        `;
    }

    infoIdNombre() {
        return `${this.id}   |  ${this.nombre}`
    }

}

const historial_eliminados = new Array;


// Se agregan 3 clientes para que se pueda trabajar con datos
const arreglo_de_clientes = new Array();
arreglo_de_clientes.push(new Cliente(1, "Emanuel Garcia", "Palemon carranza 2463", 0));
arreglo_de_clientes.push(new Cliente(2, "Griselda Morillo", "Tucuman 1235", 0));
arreglo_de_clientes.push(new Cliente(3, "Monica Centeno", "24 de noviembre 2555", 0));


// FUNCIONES
// Validacion de datos
function validarOpcion(funcion, cant_opcion) {
    let estado = false;
    let valor;

    do{
        // Se guarda el retorno de la funcion pasada
        valor = funcion();

        // Se comprueba de que ingrese un valor y no el cancelar del prompt
        if ( valor === null ){
            alert("Debe elejir una opcion para continuar");
        } else {
            valor = Number(valor)
            // Se comprueba de que sea un numero
            if ( isNaN(valor) ){
                alert("Ingreso invalido, por favor ingrese un numero");
            // Se comprueba de que este dentro del rango de opciones
            } else if ( valor < 0 || valor >= cant_opcion  ){
                alert("Ingrese una opcion dentro del rango");
            } else {
                estado = true;
            }
        }
        
    } while (!estado);
    
    return valor;
}

function validarString(mensaje) {
    let estado = false;
    let valor;
    
    
    do{
        valor = prompt(mensaje)
        // Se comprueba de que no sea un numero
        if ( valor === null ) {
            return valor;
        } else if ( !isNaN(valor) ){
            alert("Ingreso invalido, por favor ingrese un nombre");
        } else {
            estado = true;
        }
    } while ( !estado );
    
    return valor;
}

function validarNumber(mensaje){
    let estado = false;
    let valor;
    
    
    do{
        valor = prompt(mensaje)
        // Se comprueba de que no sea un string
        if ( valor === null ) {
            return valor;
        } else if ( isNaN(valor) ){
            alert("Ingreso invalido, por favor ingrese un numero");
        } else {
            estado = true;
        }
    } while ( !estado );
    
    return Number(valor);
}


// Clientes
// Agregar cliente
function agregarCliente() {
    let nombre;
    let direccion;

    nombre = validarString("Ingrese el nombre:");
    if( nombre != null ){
        direccion = validarString("Ingrese la direccion:");
        if( direccion === null ){
            return interaccionCliente();
        }
    } else {
        return interaccionCliente();
    }

    arreglo_de_clientes.push( new Cliente( Number(arreglo_de_clientes.length) + 1, nombre, direccion, 0 ))

    console.log(`El cliente se agrego con exito`);
    console.log(arreglo_de_clientes[arreglo_de_clientes.length - 1]);

    return interaccionCliente();
}

// Eliminar cliente
function eliminarCliente() {
    let id_cliente;
    let nuevo_array = new Array;
    let cliente_eliminado = new Object;

    console.log(`ID  |  Nombre`)

    arreglo_de_clientes.forEach(cliente => {
        console.log(cliente.infoIdNombre());
    });

    id_cliente = validarNumber("Ingrese la ID que quiere eliminar");

    if( id_cliente === null ){
        return interaccionCliente();
    }

    nuevo_array = arreglo_de_clientes.filter(arreglo => arreglo.id !== id_cliente);
/*     console.log(nuevo_array); */
    cliente_eliminado = arreglo_de_clientes.filter(arreglo => arreglo.id === id_cliente);

    arreglo_de_clientes.length = 0;
    
    nuevo_array.forEach(cliente => {
        arreglo_de_clientes.push(cliente)
    });

    historial_eliminados.push(cliente_eliminado);
    // spread (...): convierte el arreglo en elementos individuales
    /* arreglo_de_clientes.push(...nuevo_array); */

    console.log("El siguiente cliente fue eliminado con exito:", cliente_eliminado);

/*     console.log(arreglo_de_clientes); */

    return interaccionCliente();
}

// Lista de clientes
function listaCliente() {
    arreglo_de_clientes.forEach(cliente => {
        console.log(cliente.infoDeCliente());
    });

    return interaccionCliente();
}

// Historial de eliminados
function historialEliminados() {
    historial_eliminados.forEach(cliente => {
        console.log(cliente);
    });

    return interaccionCliente();
}


// MENUS
function menuPrincipal() {
    return prompt(`
        Elija una opcion:

        1 - Cliente
        2 - Pedido
        3 - Bagues
        0 - Salir`);


}

function menuCliente() {
    return prompt(`
        ¿Que desea realizar en la seccion cliente?

        1 - Agregar nuevo cliente
        2 - Eliminar un cliente
        3 - Ver lista de cliente
        4 - Ver historial de eliminados
        5 - Ingresar un pago
        6 - Ver cuenta corriente
        0 - Volver al menu anterior`);
}

function menuPedidos() {
    return prompt(`
        ¿Que desea realizar en la seccion pedido?
        1 - Registrar un nuevo pedido
        2 - Eliminar un pedido
        3 - Conocer el estado de un pedido
        4 - Hitorial de pedidos
        5 - Pedidos pendientes
        0 - Volver al menu anterior
        `)
}

function menuBagues() {
    return prompt(`
        ¿Que desea realizar en la seccion Bagues?
        1 - Cargar pedido
        2 - Pedidos pendientes
        3 - Realizar un pago
        0 - Volver al menu anterior
        `)
}


// INTERACCIONES
// Inicio de programa
function inicio () {
    let opcion = validarOpcion(menuPrincipal, 4);

    switch (opcion) {
        case 1:
            return interaccionCliente();

        case 2:
            return menuPedidos();

        case 3:
            return menuBagues();

        case 0:
            return;
    }
}

function interaccionCliente() {
    let opcion = validarOpcion(menuCliente, 5);

    switch (opcion) {
        case 1:
            return agregarCliente();

        case 2:
            return eliminarCliente();

        case 3:
            return listaCliente();

        case 4:
            return historialEliminados();

        case 5:
            return ingresaPago();

        case 6:
            return ccCliente();

        case 0:
            return inicio();

    }
}

console.log("Bienvenid@");
inicio();