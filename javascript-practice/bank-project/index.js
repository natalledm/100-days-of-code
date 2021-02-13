class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  _saldo = 0; //private atribute convention. It isn't private per se.
  // #saldo; https://github.com/tc39/proposal-class-fields#private-fields

  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -= valor;
      return valor;
    }
  }
  depositar(valor){
    if(valor <= 0){
      return;
    }
    this._saldo += valor;
  }
}

const cliente1 = new Cliente();
const ContaCorrenteCliente1 = new ContaCorrente();

cliente1.nome = "Ricardo";
cliente1.cpf = 1122334455;

ContaCorrenteCliente1.agencia = 1001;
ContaCorrenteCliente1.depositar(300);
console.log(ContaCorrenteCliente1._saldo);
ContaCorrenteCliente1.sacar(30);
console.log(ContaCorrenteCliente1._saldo);
