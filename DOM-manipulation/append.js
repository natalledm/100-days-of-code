const h2 = document.createElement("h2");

h2.append("Let's train!");

const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", h2);

const h3 = document.createElement("h3");

h3.innerText = "Practice again!"

h1.after(h3);