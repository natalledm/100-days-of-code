for(let i = 0; i < 100; i++){
    const button = document.createElement("button");
    button.innerText = "Hey!";
    const container = document.querySelector("#container");
    container.appendChild(button);
}