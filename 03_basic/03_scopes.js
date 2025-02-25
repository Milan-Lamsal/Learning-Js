// let var, const 

// let a =10;
// const b= 20;
// var c =30;


// {} -> this curly brackets is called scope  -> function, if else, 
 
let a =300 // global scope 

if(true){
let a =10; // block scope 
const b= 20;
var c =30;
console.log("Inner:", a);

}

// console.log(a) ->ReferenceError: a is not defined
// console.log(b) -> ReferenceError: a is not defined
console.log(c) //=> 30
console.log(a); // -> 300 as it is a global scope 

// for(let i =0 ; i<n ; i++){
//     const element = i;

// }

// window , console scope is different, or in the IDE or code environment , using the node , scope is different 