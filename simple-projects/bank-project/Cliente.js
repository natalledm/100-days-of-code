//Capital letter to specify that it is a file for a Class.
//Export came with ecma 6, kinda "new" in js. It's modules!

export class Cliente {
  nome;

  _cpf;

  get cpf(){
    return this._cpf;
  }
  
  constructor(nome, cpf){
    this.nome = nome;
    this._cpf = cpf;
  }
}