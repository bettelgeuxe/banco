/*Definición de clases*/


//importación clases
import {Cliente} from './Cliente.js';
import {CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente ='Catherine';
cliente.dniCliente = '222222';
cliente.rutCliente = '222222';

const cuentaCatherine = new CuentaCorriente();
cuentaCatherine.numero='1';
cuentaCatherine.agencia='001';
cuentaCatherine.cliente = cliente;

const cliente2 = new Cliente();
cliente2.nombreCliente ='Alejandra';
cliente2.dniCliente = '11111';
cliente2.rutCliente = '11111';

const cuentaMaleja = new CuentaCorriente();
cuentaMaleja.numero='2';
cuentaMaleja.agencia='002';
cuentaMaleja.cliente = cliente;



//cuentaCatherine.saldo=0;


let saldo = cuentaCatherine.verSaldo();


saldo=cuentaCatherine.depositoEnCuenta(1000);
console.log('El saldo actual (cuentaCatherine) es: '+ saldo);

saldo=cuentaCatherine.retirarDeCuenta(100);
console.log('El saldo actual es: '+ saldo);

cuentaCatherine.transferirParaCuenta(100,cuentaMaleja);

const saldoMaria = cuentaMaleja.verSaldo();
console.log('El saldo actual (cuenta de Maleja)' + saldoMaria);

const saldoCatherine =  cuentaCatherine.verSaldo();
console.log('El saldo actual (cuenta de Cathe)' + saldoCatherine);