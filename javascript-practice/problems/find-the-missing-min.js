// Write a function:

// that, given an array A of N integers, 
// returns the smallest positive integer (greater than 0) that does not occur in the array.


function findMissingMin (array){
    let positiveArray = array.filter(integer => integer > 0);
    positiveArray.sort((a,b) => a - b);
    if(positiveArray.length === 0 || positiveArray[0] > 1){
        return 1;
    }

    for (let i = 0; i < positiveArray.length; i++){
        if (positiveArray[i+1] - positiveArray[i] > 1){
            return positiveArray[i] + 1;
        }
    }
    return positiveArray[positiveArray.length-1] + 1;
}

console.log(findMissingMin([1,3,5,6])); // 2
console.log(findMissingMin([-1,-10,-11,-12])); // 1
console.log(findMissingMin([1,2,3,4,5,7,6,3,8,9,0,1000000])); //10
console.log(findMissingMin([1,2,3,4])); // 5
