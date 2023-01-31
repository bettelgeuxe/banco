export class Cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;

    constructor(nombreCliente, dniCliente, rutCliente){
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = '';
    }

    asignarClave(clave){
        this.#clave = clave;
    }

    
    autenticable(clave){
        return true;
    }

    /* SE REEEMPLAZA EL GETTER POR MÉTODO LLAMADO AUTENTICABLE - PARA QUE SEA INTERFACE AUTE
    get clave(){
        return this.#clave;
    }
*/    
    }
