function rollDie(sides = 6){ //defining to use as 6 if the function doesn't receive a param
    return Math.floor(Math.random() * sides) + 1;
}

console.log(rollDie()); //works for empty param
console.log(rollDie(20));

function greet(person, message = "Hello"){ //needs to be the second param
    console.log(`${message}, ${person}`); //since it will use the first if only one is given
}

greet("Mike");
greet("Ana", "Hey");