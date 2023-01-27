class Cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente{
    numero;
    saldo;
    agencia;

    depositoEnCuenta(valor){
        this.saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nombreCliente = "Jose";
cliente1.dniCliente="123";
cliente1.rutCliente="123";

const cuentaCorriente1 = new CuentaCorriente();
cuentaCorriente1.numero="1234567";
cuentaCorriente1.saldo=2000; 
cuentaCorriente1.agencia=1001;

const cliente2 = new Cliente();
cliente2.nombreCliente = "Pepito";
cliente2.dniCliente="123456";
cliente2.rutCliente="123456"

const cuentaCorriente2 = new CuentaCorriente();
cuentaCorriente2.numero="123";
cuentaCorriente2.saldo=7000;
cuentaCorriente2.agencia=1002;


console.log(cliente1);
console.log(cuentaCorriente1)

console.log(cliente2);
console.log(cuentaCorriente2);

console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);