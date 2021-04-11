const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list; // this is assigning the a and b to 1 and 2, arr to the rest. As it's returning only arr, it ignores the first two numbers/letters.
  return arr;
}
const arr = removeFirstTwo(source);