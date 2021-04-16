const feline = { legs: 4, family: "Felidae"};
const canine = { family: "Caninae", furry: true};

const dog = { ...canine, isPet: true};

//and why not spread an array into a object?

const nums = [1,2,3,4];

const numsObj = {...nums};
console.log(numsObj)
//{ '0': 1, '1': 2, '2': 3, '3': 4 } the index is the key! =)