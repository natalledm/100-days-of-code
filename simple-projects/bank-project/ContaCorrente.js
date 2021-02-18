import { Cliente } from "./Cliente.js"
import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta{
  // agencia; // Better practice to initialize it inside a method.
  //cliente; //separados porque estes são públicos, facilmente mutáveis e o saldo é privado.
  //these two come as undefined. Similar to null, but you need to explicitly define it as null.
  
  // _saldo = 0; //private atribute convention: underline at the beginning. It isn't private per se.
  // #saldo; https://github.com/tc39/proposal-class-fields#private-fields
  // _cliente;
  
  // get saldo(){ //getter to make saldo only readable, so you can't change it directly, only using the methods below.
  //   return this._saldo;
  // }
  static numeroDeContas = 0;
  
  constructor(cliente, agencia){
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  }

  // transferir(valor, conta){ //Remember to be careful with this. Objects are not primitive values (string, int, etc.) so when refered like this
  //   //what is refered is the object itself, not a copy of it like a primitive value. So any changes in the object inside this method, will change
  //   //the original object itself. Ex: if I put a "cidade: Rio de Janeiro", it will appear in the object that is being called by this function.
  //   const valorSacado = this.sacar(valor);
  //   conta.depositar(valorSacado);
  // }
}