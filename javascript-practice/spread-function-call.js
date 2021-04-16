const nums = [1,2,3,4,5,67,432,111,20000,456789];

//Math.max(1,2,3) = 3.
//Math.max(nums) = NaN => needs arguments, can't read array

console.log(Math.max(...nums)); //spread just pass the arguments for us.
console.log(...nums); //it's not the array, just all arguments printed