// arrays 

/** square bracket [],  ()=> parentheses  , {}=> culry braces, or brackets and the numebr on the bracket are called elements [0,1,2,3,4,5], it can be string , boolean  */

// different way of declaring arrays

const myArry =[8,1,2,3,4,5]; // number arry 
// const myHero =["Spiderman", "SuperMan", "Ironman"];
// const myArr2 = new Array(1,2,3,4,)
// console.log(myArry[0]);

//Array Methods ( push and pop )|| add at end or remove at end 

// myArry.push(7);  add value  at the end 
// myArry.push(9);
// myArry.push(0);
// myArry.pop(); delete the value at the end no need to give the value by yourself 

//unshift and shift || add at beginning or Remove at first 

//  myArry.unshift(0) 
// added this on the first of the array , because of which all the array has to move one step, not so optimize, (example of using that can be in todo list)
// myArry.shift(); 
// remove the first array 

// asnwer to my question method in the form of true or false

// console.log(myArry.includes(9));=>to check if 9 is included in array or not , as it does not include so its false
// console.log(myArry.includes(1)); // to check if 1 is included in array or not, as it include so it is true
// console.log(myArry.indexOf(9)); // as 9 is not included so it will return -1
// console.log(myArry.indexOf(8)); // it will show the index of 8 =>0 

// Interesting operation => .join() - is used to join the array elements of an array into a string

// const newArry= myArry.join();
// console.log(newArry);// convert array into string
// console.log(typeof newArry); // checking the variable 
// console.log(myArry);

// slice, splice - often heard 

//slice -> does not change the new array 
console.log ("A",myArry);// 
const myn1= myArry.slice(1,3)// index( 1 to 3 ) where 3 is not included 
console.log(myn1); 

//splice -> remove ,replaces or adds elements 
console.log ("B",myArry);
const myn2= myArry.splice(1,3)// yes changes the original array 
console.log(myn2);// changes the original array 
console.log("C",myArry);






