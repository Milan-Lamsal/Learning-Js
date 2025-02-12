 /* call by value and call by reference -> how these data are store and how these data can be access on the basis of that it has been catogorized and they are Primitive and Non Primitive*/

//  Primitive dataypes or known as Call by value => String, Number , Boolean, Null, undefined, Symbol(to make a value unique), BigInt(scientific value or very large number ) total = 7

/* Is JavaScript Dynamically typed language or statically typed
ans = Dynamically type language as we do not need to define the variable type such as*/

const score= 100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp= null;
let userEmail;// undefined

// Symbol
 const id= Symbol('123');
 const anotherId= Symbol('123');

console.log(id);
console.log(anotherId);
console.log(id==anotherId);

// BigInt
const bigNumber= 986115570341940965465464654640302;
const bigNumberForBigInt= 986115570341940965465464654640302n; // BigInt just put n at the end
console.log(bigNumber);
console.log(bigNumberForBigInt);

// Non Primitive dataypes (Reference) 

// Array, Objects, Functions= 3 types 

// const heros =["superman", "spiderman", "ironman"];
// let myObj ={
//     name: otis,
//     age: 22,
// }
const myFunction= function(){
    console.log("Hello World");
}

//How to find what kind of datatypes you used=> typeof function

console.log(typeof bigNumberForBigInt);
console.log(typeof myFunction);
console.log(typeof outsideTemp);

//  note=> https://262.ecma-international.org/5.1/#sec-11.4.3







