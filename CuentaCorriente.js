import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta{

    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia){
        super(cliente,numero,agencia,0);
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor){
        //valor = valor * 1+comision/100;
        /*
        if(valor<=this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;*/

        super._retirarDeCuenta(valor,5);
    }

    
}
