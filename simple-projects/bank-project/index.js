import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"


const cliente1 = new Cliente("Ricardo", 1122334455);
const cliente2 = new Cliente("Alice", 1122335566);

const ContaCorrenteCliente1 = new ContaCorrente(102, cliente1);
ContaCorrenteCliente1.depositar(500);
console.log(ContaCorrenteCliente1);

const ContaCorrenteCliente2 = new ContaCorrente(1001, cliente2);
console.log(ContaCorrenteCliente2);

ContaCorrenteCliente1.transferir(100, ContaCorrenteCliente2);
console.log(ContaCorrenteCliente2);

console.log(ContaCorrente);