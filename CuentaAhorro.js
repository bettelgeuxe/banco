import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta {
    constructor(cliente, numero, agencia, saldo){
        super(cliente,numero,agencia,saldo);
    }

    retirarDeCuenta(valor){
        
        /*
        if(valor<=this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;*/

        super._retirarDeCuenta(valor,2);
    }

    
    
}