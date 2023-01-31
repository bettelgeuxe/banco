export class Empleado {
    #nombre;
    #dni;
    #salario;
    #clave;

    constructor(nombre, dni, salario){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = '';

    }

    asignarClave(clave){
        this.#clave = clave;
    }

    autenticable(clave){
        return clave == this.#clave;
    }

    /* SE REEEMPLAZA EL GETTER POR MÉTODO LLAMADO AUTENTICABLE - PARA QUE SEA INTERFACE AUTE
    get clave(){
        return this.#clave;
    }
*/
    verBonificacion(){
        return this.#salario;
    }

    _verBonificacion(bono){
        return this.#salario + this.#salario*bono/100;
    }
}