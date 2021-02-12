const listaDeDestinos = new Array(
  `São Paulo`,
  `Rio de Janeiro`,
  `Salvador`
);

const idadeComprador = 17;
const estaAcompanhado = true;
let temPassagemComprada = false;
const destino = "Salvador";

// if(idadeComprador >= 18 || estaAcompanhado == true){
//   console.log("É maior de idade ou menor acompanhado, compre seu destino:")
//   console.log(listaDeDestinos);
//   listaDeDestinos.splice(1,1);
//   temPassagemComprada = true;
//   console.log("Rio de Janeiro comprado. Destinos restantes:")
//   console.log(listaDeDestinos);
// } else {
//   console.log("Precisa ser maior de idade ou estar acompanhado para comprar destino");
//   temPassagemComprada = false;
// }

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;

// while(contador<3){
//   if(listaDeDestinos[contador] == destino){
//     console.log("Destino existente");
//     destinoExiste = true;
//     break;
//   }
//   contador += 1;
// }

// ou

for(let i = 0; i < 3; i++){
  if(listaDeDestinos[i] == destino){
    console.log("Destino existente");
    console.log(i);
    destinoExiste = true;
  }
}

console.log(destinoExiste);