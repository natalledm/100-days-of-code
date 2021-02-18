import { Cliente } from "./Cliente.js"
import {Conta} from "./Conta.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente1 = new Cliente("Ricardo", 1122334455);
// const cliente2 = new Cliente("Alice", 1122335566);

const ContaCorrenteCliente1 = new ContaCorrente(1001, cliente1);
// ContaCorrenteCliente1.depositar(500);
// console.log(ContaCorrenteCliente1);

const ContaCorrenteRicardo = new Conta(0, cliente1, 1001);
console.log(ContaCorrenteCliente1, ContaCorrenteRicardo);