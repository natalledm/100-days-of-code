const container = document.querySelector("#container");


const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for(let i = 1; i < 152; i++){
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  const newImg = document.createElement("img");
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  newImg.src = `${baseUrl}${i}.png`;
  container.appendChild(pokemon);
}