//from

const add = function(x,y){
  return x + y;
}

//to

const plus = (x,y) => {
  return x + y;
}

// empty parameter

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
}

// singular parameter = possible to write without ()

const echo = word => {
  return console.log(word);
}

// implicit return = can use () or not for the return

const repeat = word => console.log(word);

const isEven = num => num % 2 === 0;