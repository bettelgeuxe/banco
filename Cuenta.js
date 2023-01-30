export class Cuenta{
    #cliente;
    #saldo;

    
    
    constructor(cliente, numero, agencia, saldo){
        
        this.numero =  numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente(valor){
        //proteger el atributo cliente para que no pueda ser manipulado si no es una instancia de la clase
        if (valor instanceof Cliente)
        this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }


    depositoEnCuenta(valor){
        if(valor>0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor){
        
        if(valor<=this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);

    }
}
