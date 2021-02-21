// Abstract Class = only works for inheritance, not to be instanced.

export class Conta {
  constructor(saldoInicial, cliente, agencia){
    if(this.constructor == Conta){
      throw new Error("Você não deveria instanciar um objeto do tipo conta");
    }

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

  //abstract method = created to be overwritten.
  sacar(valor){
    throw new Error("O método da Conta sacar é abstrato");
  }

  _sacar(valor, taxa){
    const valorSacado = taxa * valor;
    if(this._saldo >= valorSacado){
      this._saldo -= valorSacado;
      console.log("dentro da conta")
      return valorSacado;
    }
    return 0;
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