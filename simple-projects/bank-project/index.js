import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 1122334455);
// const cliente2 = new Cliente("Alice", 1122335566);

const ContaCorrenteCliente1 = new ContaCorrente(1001, cliente1);
// ContaCorrenteCliente1.depositar(500);
// console.log(ContaCorrenteCliente1);

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);
const contaSalarioRicardo = new ContaSalario(cliente1);
contaSalarioRicardo.depositar(100);
contaSalarioRicardo.sacar(90);

console.log(contaSalarioRicardo);
