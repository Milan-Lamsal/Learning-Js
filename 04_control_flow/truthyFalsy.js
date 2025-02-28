// Truthy and Falsy 
// const userName="DEBAL";
// const userName="";
const userName=[];
if(userName){
    console.log("Got your Name");
}else {
    console.log("Don't have your name");
}


// Falsy values
// false, 0, -O, BigInt (0n),null, undefined , NaN,  "", (without space "" is falsy )

// Truthy Values -> if string then all truthy 
//  "0", 'false' , [], function(){} empty function , " "(with space " " is truthy )

//  how to check if the array is empty or not 
if(userName.length===0){
    console.log("Array is empty ");
}else{
    console.log("Array is not empty ");
}

// How to check if the object is empty or not 
const myobj={}
if(Object.keys(myobj).length===0){
    console.log("Object is empty ")
}else{
    console.log("Objet is not empty ");
}
//Important 

// false==0 ->true
// false==''->true
// 0==''->true

// Nullish Coalescing Operator(??): value = left-hand side ?? right-hand side  null undefined => used when working with Database for Null and Undefined value 

let val1;
// val1 = 5 ?? 10 // prints ->5
// val1= null ?? 10 // prints -> 10 
// val1= undefined ?? 15 
val1=null ?? 10 ?? 20



// console.log(`val1 is ${val1}`);-> 5
// console.log(`value 1 is ${val1}`);->10
// console.log(`value 1 is ${val1}`);->15
console.log(`value 1 is ${val1}`);// 10


//  Terniary Operator 

// condition  ? true : false

const iceTeaPrice =5;
iceTeaPrice<=8 ? console.log("less than 8") :console.log("more than 8");
