// rest is just to collect the parameters and pass them to an array

function sum(...numbers){
  return numbers.reduce((total, num) => total + num);
}

console.log(sum (1,2,3,4,5,6));

function greet(mother, father, ...siblings){
  console.log(`Hi, ${mother}`);
  console.log(`Hello, ${father}`);
  console.log(`and hi to ${siblings}`);
}

greet("Alice", "John", "Peter", "Amanda", "Ana");