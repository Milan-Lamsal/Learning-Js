 //let score = 33
//let score="33";
let score="33abc";
// let score=null;

 console.log(typeof score);
console.log(typeof (score));

// Conversion into number 

 let valueInNumber= Number(score)
 console.log(typeof valueInNumber );
 console.log(valueInNumber);

// "33"=> 33
// "33abc"=>NaN (Not a number)
// true => 1; false =>0

/** Conversion into Boolean */

let isLoggedIn =1;
let isItLoggedIn=""
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
let booleanIsITLoggedIn= Boolean(isItLoggedIn);
console.log(booleanIsITLoggedIn);
// 1=> true ; 0=> false 
//" "(empt)=> false 
//"hitesh"=>false
//

//Converstion into String
let someNumber= 33;
let stringNumber= String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
