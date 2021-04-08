function makeBetweenFunc(min, max){
  return function(num){
    return num >= min && num <= max;
  }
}

const isChild = makeBetweenFunc(0, 18);

console.log(isChild(40));
console.log(isChild(5));

function makeMisteryFunc(){
  const rand = Math.random();
  if(rand > 0.5){
    return function(){
      console.log("Good!");
    }
  } else {
    return function(){
      console.log("Bad!");
    }
  }
}
// if you call it like makeMisteryFunc(), it will return a function, not the value inside, so you need to capture it into a variable.

const mystery = makeMisteryFunc();
console.log(mystery());