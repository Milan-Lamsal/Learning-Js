// Reduce method is use specially in shopping card 
  
// given accumulator = an empty variable , and that empty value. and later initalvalue is kept in empty variable 

/**const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10 */

const myNums =[1,2,3]
let myTotal = myNums.reduce(function ( acc, currVal){
  console.log(`acc:${acc} and currVal:${currVal)`);
    return acc+currVal;

}, 0)// giving 0 to acc 
console.log(myTotal);