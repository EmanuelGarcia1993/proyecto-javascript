// CONSTRUCTORES

// Clientes
class Cliente {
    constructor(id, nombre, direccion) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.saldo = 0;
        this.historialPagos = [];
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
    
    registrarPago(nroComprobante, tipoComprobante, importe, fecha) {
        const pago = {
            nroComprobante,
            tipoComprobante,
            importe,
            fecha
        }

        this.historialPagos.push(pago);
    }

    infoDeCliente() {
        return `
        ID: ${this.id}
        Nombre: ${this.nombre}
        Direccion: ${this.direccion}
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
arreglo_de_clientes.push(new Cliente(1, "Emanuel Garcia", "Palemon carranza 2463"));
arreglo_de_clientes.push(new Cliente(2, "Griselda Morillo", "Tucuman 1235"));
arreglo_de_clientes.push(new Cliente(3, "Monica Centeno", "24 de noviembre 2555"));


// FUNCIONES
// Relleno
function sinDesarrollar(funcion) {
    alert("Seccion sin desarrollar");
    return funcion();
}

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
            } else if ( valor < 0 || valor > cant_opcion  ){
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
            alert("Ingreso invalido, por favor ingrese un texto");
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

function seleccionDeCliente(mensaje) {
    // Devuelve la posicion del cliente seleccionado
    let posicion_cliente;
    let id_selec;

    listaIdNombre(arreglo_de_clientes);

    do{
        id_selec = validarNumber(mensaje);
    
        if( id_selec === null ){
            return interaccionCliente();
        }
        
        posicion_cliente = arreglo_de_clientes.findIndex( cliente => cliente.id === id_selec );

        if( posicion_cliente === -1 ) {
            alert("La ID ingresada no existe.")
        } else {
            if (!confirm(`El cliente seleccionado es ${arreglo_de_clientes[posicion_cliente].getNombre()}. ¿Es correcto?`)){
                posicion_cliente = -1;
            }
        }

    } while ( posicion_cliente === -1 );

    return posicion_cliente;
}

// Informacion
function listaIdNombre(arreglo) {
    console.log(`ID  |  Nombre`);

    arreglo.forEach(cliente => {
        console.log(cliente.infoIdNombre());
    });

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

    if( confirm(`Esta seguro que desea agregar a ${nombre} con direccion en ${direccion}`) ){
        arreglo_de_clientes.push( new Cliente( Number(arreglo_de_clientes.length) + 1, nombre, direccion, 0 ))
    
        console.log(`El cliente se agrego con exito`);
        console.log(arreglo_de_clientes[arreglo_de_clientes.length - 1]);
    } else {
        alert("No se ha agreagado ningun cliente nuevo");
    };

    return interaccionCliente();
}

// Eliminar cliente
function eliminarCliente() {
    let posicion_cliente;

    posicion_cliente = seleccionDeCliente("Ingrese la ID que quiere eliminar");

    // FindIndex guarda la posicion del objeto buscado
    
    if (confirm(`Esta segur@ que decea eliminar a: ${arreglo_de_clientes[posicion_cliente].infoDeCliente()}`)) {
        
        let [cliente_eliminado] = arreglo_de_clientes.splice(posicion_cliente, 1);

        historial_eliminados.push(cliente_eliminado); 
    
        console.log("El siguiente cliente fue eliminado con exito:", cliente_eliminado.infoDeCliente());        
    } else {
        alert("No se ha aliminado ningun cliente");
    }

    return interaccionCliente();
}

// Lista de clientes
function listaCliente() {
    console.log("Lista de clientes");

    arreglo_de_clientes.forEach(cliente => {
        console.log(cliente.infoDeCliente());
    });

    return interaccionCliente();
}

// Historial de eliminados
function historialEliminados() {
    if(historial_eliminados == "" ) {
        console.log("No hay clientes eliminados");
    } else {
        console.log("Lista de clientes eliminados");
    
        historial_eliminados.forEach(cliente => {
            console.log(cliente.infoDeCliente());
        });
    }
        
        return interaccionCliente();
}

// Ingresar un pago
function ingresaPago() {
    let posicion_cliente;
    let tipo_comprobante;
    let importe;
    let fecha;

    posicion_cliente = seleccionDeCliente("¿De que cliente quiere ingresar un pago?");

    tipo_comprobante = interaccionComprobantePago();

    if ( tipo_comprobante === null ){
        return interaccionCliente()
    }

    importe = validarNumber("Ingrese el importe abonado");

    if (importe === null) {
        return interaccionCliente()
    }

    fecha = validarString("Ingrese la fecha de pago");

    if (fecha === null) {
        return interaccionCliente()
    }

    arreglo_de_clientes[posicion_cliente].registrarPago(arreglo_de_clientes[posicion_cliente].historialPagos.length + 1, tipo_comprobante, importe, fecha);

    console.log(arreglo_de_clientes[posicion_cliente]);

    return interaccionCliente();
}




// MENUS
function menuPrincipal() {
    return prompt(`Elija una opcion:

        1 - Cliente
        2 - Pedido
        3 - Bagues
        0 - Salir`);
}

function menuCliente() {
    return prompt(`¿Que desea realizar en la seccion cliente?

        1 - Agregar nuevo cliente
        2 - Eliminar un cliente
        3 - Ver lista de cliente
        4 - Ver historial de eliminados
        5 - Ingresar un pago
        6 - Ver cuenta corriente
        0 - Volver al menu anterior`);
}

function menuPedidos() {
    return prompt(`¿Que desea realizar en la seccion pedido?

        1 - Registrar un nuevo pedido
        2 - Eliminar un pedido
        3 - Conocer el estado de un pedido
        4 - Hitorial de pedidos
        5 - Pedidos pendientes
        0 - Volver al menu anterior
        `)
}

function menuBagues() {
    return prompt(`¿Que desea realizar en la seccion Bagues?

        1 - Cargar pedido
        2 - Pedidos pendientes
        3 - Realizar un pago
        0 - Volver al menu anterior
        `)
}

function tipoComprobantePago() {
    return prompt(`Ingrese el tipo de comprobante:
        1 - Adelanto
        2 - Deuda
        3 - Total
        0 - Cancelar`)
}


// INTERACCIONES
// Inicio de programa
function inicio () {
    let opcion = validarOpcion(menuPrincipal, 4);

    if (opcion === null) {
        return;
    } else {
        switch (opcion) {
            case 1:
                return interaccionCliente();
    
            case 2:
                /* return menuPedidos(); */
                return sinDesarrollar(inicio);
    
            case 3:
                /* return menuBagues(); */
                return sinDesarrollar(inicio);
    
            case 0:
                return;
        }
    }
}

function interaccionCliente() {
    let opcion = validarOpcion(menuCliente, 6);

    if (opcion === null) {
        return inicio();
    } else {
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
                /* return ccCliente(); */
                return sinDesarrollar(interaccionCliente);
    
            case 0:
                return inicio();
    
        }
    }
}

function interaccionComprobantePago() {
    let tipo_comprobante;
    let seleccion = validarOpcion(tipoComprobantePago, 3);
    
    switch (seleccion) {
        case 1:
            tipo_comprobante = "Adelanto";
            break;
        case 2:
            tipo_comprobante = "Deuda";
            break;
        case 3:
            tipo_comprobante = "Total";
            break;
        case 0:
            tipo_comprobante = null;
            break;
    }

    return tipo_comprobante;

}

console.log("Bienvenid@");
inicio();