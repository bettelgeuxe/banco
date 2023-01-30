/*Definición de clases*/


//importación clases
import {Cliente} from './Cliente.js';
import {CuentaCorriente} from './CuentaCorriente.js';
import { CuentaAhorro } from './CuentaAhorro.js';
import { Cuenta } from './Cuenta.js';
import { CuentaNomina } from './CuentaNomina.js';


const cliente = new Cliente('Catherine', '222222', '222222');
const cliente2 = new Cliente('Alejandra', '111111', '111111');

const cuentaCatherine = new CuentaCorriente(cliente,'1','001');
const cuentaMaleja = new CuentaCorriente(cliente2,'2','002');


const cuentaAhorroCathe  = new CuentaAhorro(cliente, '9985', '001',0);
console.log(cuentaAhorroCathe);

const cuentaNominaCathe = new CuentaNomina(cliente, '9854', '001',100);
cuentaNominaCathe.depositoEnCuenta(1500);
console.log(cuentaNominaCathe.verSaldo());
cuentaNominaCathe.retirarDeCuenta(400);
console.log(cuentaNominaCathe.verSaldo());
/*
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
*/
/*
cuentaCatherine.transferirParaCuenta(100,cuentaMaleja);
console.log('Cuenta de Maleja: ', cuentaMaleja);
const saldoMaria = cuentaMaleja.verSaldo();
console.log('El saldo actual (cuenta de Maleja)' + saldoMaria);

const saldoCatherine =  cuentaCatherine.verSaldo();
console.log('El saldo actual (cuenta de Cathe)' + saldoCatherine);

console.log(cuentaMaleja.cliente);
*/


