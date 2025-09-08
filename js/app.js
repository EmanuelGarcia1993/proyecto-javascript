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
}


// Se agregan 3 clientes para que se pueda trabajar con datos
const arreglo_de_clientes = new Array();
arreglo_de_clientes.push(new Cliente(1, "Emanuel Garcia", "Palemon carranza 2463", 0));
arreglo_de_clientes.push(new Cliente(2, "Griselda Morillo", "Tucuman 1235", 0));
arreglo_de_clientes.push(new Cliente(3, "Monica Centeno", "24 de noviembre 2555", 0));


// FUNCIONES
// Validacion de datos
function validarOpcion(valor, cant_opcion) {
    let estado = false;

    if ( valor === null ) {
        alert("Debe elejir una opcion para continuar");
    } else {
        valor = Number(valor)
    }
    if ( isNaN(valor) ) {
        alert("Ingreso invalido, por favor ingrese un numero");
    } else if ( valor < 0 || valor >= cant_opcion  ){
        alert("Ingrese una opcion dentro del rango");
    } else {
        estado = true;
    }

    console.log(estado);
    return estado;
}

// Interaccion
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
        3 - Ver info de cliente
        4 - Ingresar un pago
        5 - Ver cuenta corriente
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


// Inicio de programa
function inicio () {
    let opcion;
    let estado;
    
    do {
        opcion = menuPrincipal();
        estado = validarOpcion(opcion, 4);
    } while (!estado);

    console.log(opcion);

    switch (opcion) {
        case "1":
            menuCliente()
            break;
        case "2":
            console.log("vamos bien");
            break;
        case "3":
            console.log("vamos bien");
            break;
        case "0":
            break;
    }
}

inicio();