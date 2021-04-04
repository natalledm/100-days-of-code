const eco = (message) => console.log(message);

eco("oooooi");

// default parameter if value is not specified
const increment = (number, value = 1) => number + value;

console.log(increment(1, 2));
console.log(increment(1)); //it will use the default valor