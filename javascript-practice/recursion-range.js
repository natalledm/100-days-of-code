function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum){
    return [startNum];
  }
  return [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
};

console.log(rangeOfNumbers(1, 5));

function rangeOfNumbersReverse(startNum, endNum) {
  if(startNum === endNum){
    return [startNum];
  }
  return (rangeOfNumbers2(startNum + 1, endNum).concat([startNum]));
};

console.log(rangeOfNumbersReverse(1, 5));