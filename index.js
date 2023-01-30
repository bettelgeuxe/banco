/*Definición de clases*/


//importación clases
import {Cliente} from './Cliente.js';
import {CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente('Catherine', '222222', '222222');
const cliente2 = new Cliente('Alejandra', '111111', '111111');

console.log(cliente);
console.log(cliente2);
const cuentaCatherine = new CuentaCorriente(cliente,'1','001');
const cuentaMaleja = new CuentaCorriente(cliente2,'2','002');
console.log(cuentaMaleja);

//cuentaCatherine.saldo=0;


let saldo = cuentaCatherine.verSaldo();


saldo=cuentaCatherine.depositoEnCuenta(1000);
console.log('El saldo actual (cuentaCatherine) es: '+ saldo);

console.log(cuentaMaleja.cliente);
console.log(cuentaCatherine.cliente);

console.log(CuentaCorriente.cantidadCuentas);

/*
cuentaCatherine.transferirParaCuenta(100,cuentaMaleja);
console.log('Cuenta de Maleja: ', cuentaMaleja);
const saldoMaria = cuentaMaleja.verSaldo();
console.log('El saldo actual (cuenta de Maleja)' + saldoMaria);

const saldoCatherine =  cuentaCatherine.verSaldo();
console.log('El saldo actual (cuenta de Cathe)' + saldoCatherine);

console.log(cuentaMaleja.cliente);
*/