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
// let myTotal = myNums.reduce(function ( acc, currVal){
//   console.log(`acc:${acc} and currVal: ${currVal}`);
//     return acc+currVal;

// }, 0) // acc :0

// console.log(myTotal);

/**
acc:0 and currVal: 1
acc:1 and currVal: 2
acc:3 and currVal: 3
 */

//  wE can do in another way as well 

const myTotal =myNums.reduce((acc, currVal)=> acc+ currVal, 0);
console.log(myTotal);

const shoppingCart=[
  {
    itemName: 'js course',
    price: 499
  },
  {
    itemName: 'python course',
    price:599
  },
  {
    itemName: 'App dev',
    price:1499
  },
  {
    itemName: 'DSA course',
    price:799
  }
]
let finalPrice= shoppingCart.reduce((acc, currVal)=> acc + currVal.price , 0 ) // here currVal represent 499

console.log(finalPrice);