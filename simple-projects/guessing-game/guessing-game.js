let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) { //false because it's not an integer.
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random()*maximum) + 1; //floor to remove the float and make random (from 0 to 9) a integer, +1 to go to 10 and * maximum to get the range.

let guess = parseInt(prompt("Now guess the number!"));

let attempts = 1;

while (!guess) {
  guess = parseInt(prompt("Enter a valid number!"));
}

while (parseInt(guess) !== targetNum) { //parsing it here so it can read the "q" if needed.
  if(guess === "q") break;
  attempts++;

  if (guess > targetNum) {
    guess = prompt("Too high! Now guess the number!");
  } else {
    guess = prompt("Too low! Now guess the number!");
  }
}

if (guess === "q"){
  console.log("Sure, quiting!");
} else {
  console.log(`You won! It took you ${attempts} guesses!`);
}
