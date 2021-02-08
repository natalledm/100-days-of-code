var myArray = ["dog", 2];

// storing the first element in the array in another variable
var myAnimal = myArray[0];

// changing the second element in the array
myArray[1] = 1;

// calling nested elements/arrays
var myNumbers = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myNumbers[2][1];

console.log(myAnimal, myArray, myData); // dog ["dog", 1] 8

// append data into the end of the array
var namesAges = [["John", 23], ["Ana", 20]];
namesAges.push(["Manoel", 50]);

