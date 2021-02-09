const firstName = "Mary";
const surname = "Joseph";
let age = 30;


console.log(firstName, surname);
console.log(firstName + " " + surname);
console.log(`My name is ${firstName} ${surname}`);

age = 31;

console.log(age); 
// let can be redefined, but it is good practice to maintain them as minimal as possible. Const is more stable, so less errors.