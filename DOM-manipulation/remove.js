const h4 = document.querySelector("h4");


//old and strange way, because it needs to go to the parent to remove what we want
h4.parentElement.removeChild(h4);

//better way:
const h3 = document.querySelector("h3");
h3.remove(h3);
