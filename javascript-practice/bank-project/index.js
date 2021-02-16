import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 1122334455;

const ContaCorrenteCliente1 = new ContaCorrente();
ContaCorrenteCliente1.agencia = 1001;
ContaCorrenteCliente1.cliente = cliente1;
ContaCorrenteCliente1.depositar(500);
console.log(ContaCorrenteCliente1);

// cliente2.nome = "Alice";
// cliente2.cpf = 1122335566;

const ContaCorrenteCliente2 = new ContaCorrente();
const cliente2 = new Cliente();
ContaCorrenteCliente2.agencia = 1001;
ContaCorrenteCliente2.cliente = cliente2;
ContaCorrenteCliente2.cliente.nome = "Alice" //another way of saying, changing directly into ContaCorrente's Object without the need to use cliente itself.
ContaCorrenteCliente2.cliente.cpf = 1122335566;
console.log(ContaCorrenteCliente2);

ContaCorrenteCliente1.transferir(100, ContaCorrenteCliente2);
console.log(ContaCorrenteCliente2);