// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
// const salvador = `Salvador`;

const listaDeDestinos = new Array(
  `São Paulo`,
  `Rio de Janeiro`,
  `Salvador`
);

const idadeComprador = 17;
const estaAcompanhado = true;

// if(idadeComprador >= 18){
//   console.log("É maior de idade, compre seu destino:")
//   console.log(listaDeDestinos);
//   listaDeDestinos.splice(1,1);
//   console.log("Rio de Janeiro comprado. Destinos restantes:")
// } else if(estaAcompanhado){
//     console.log("É menor de idade, mas está acompanhado. Compre seu destino:")
//     console.log(listaDeDestinos);
//     listaDeDestinos.splice(1,1);
//     console.log("Rio de Janeiro comprado. Destinos restantes:")
// } else {
//   console.log("Precisa ser maior de idade ou estar acompanhado para comprar destino");
// }


// listaDeDestinos.push(`Curitiba`); // add
// listaDeDestinos.splice(1,1); //position and how many need to be removed

// reescrevendo

if(idadeComprador >= 18 || estaAcompanhado == true){
  console.log("É maior de idade ou menor acompanhado, compre seu destino:")
  console.log(listaDeDestinos);
  listaDeDestinos.splice(1,1);
  console.log("Rio de Janeiro comprado. Destinos restantes:")
  console.log(listaDeDestinos);
} else {
  console.log("Precisa ser maior de idade ou estar acompanhado para comprar destino");
}