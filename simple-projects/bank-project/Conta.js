export class Conta {
  constructor(saldoInicial, cliente, agencia){
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  set cliente(novoValor){
    if(novoValor instanceof Cliente){
      this._cliente = novoValor;
    }
  }
  get cliente(){
    return this._cliente;
  }

  get saldo(){ //getter to make saldo only readable, so you can't change it directly, only using the methods below.
    return this._saldo;
  }

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
  
  transferir(valor, conta){ 
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}