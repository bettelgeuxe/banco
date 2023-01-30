/*Definición de clases*/


//importación clases
import {Cliente} from './Cliente.js';
import {CuentaCorriente} from './CuentaCorriente.js';
import { CuentaAhorro } from './CuentaAhorro.js';


const cliente = new Cliente('Catherine', '222222', '222222');
const cliente2 = new Cliente('Alejandra', '111111', '111111');
const cuentaCatherine = new CuentaCorriente(cliente,'1','001');
const cuentaMaleja = new CuentaCorriente(cliente2,'2','002');
const cuentaAhorroCathe  = new CuentaAhorro(cliente, '9985', '001',0);
console.log(cuentaMaleja);

console.log(cuentaAhorroCathe);
cuentaCatherine.depositoEnCuenta(1000);
console.log(cuentaCatherine.verSaldo());
cuentaCatherine.retirarDeCuenta(100);
console.log(cuentaCatherine.verSaldo());

cuentaAhorroCathe.depositoEnCuenta(2000);
cuentaAhorroCathe.retirarDeCuenta(1000);
console.log(cuentaAhorroCathe);
//cuentaCatherine.saldo=0;

/*
cuentaCatherine.transferirParaCuenta(100,cuentaMaleja);
console.log('Cuenta de Maleja: ', cuentaMaleja);
const saldoMaria = cuentaMaleja.verSaldo();
console.log('El saldo actual (cuenta de Maleja)' + saldoMaria);

const saldoCatherine =  cuentaCatherine.verSaldo();
console.log('El saldo actual (cuenta de Cathe)' + saldoCatherine);

console.log(cuentaMaleja.cliente);
*/


