// function myFunction(){

//     console.log("Welcome to my Function");
//     console.log("We are learning Funnctions);")
// }
// myFunction();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function myFunction(msg, n ){
//     // parameter ->input
//     console.log(msg , n);
// }
// myFunction("Welcome to my Function", 100);// argument ->output

/* Function -> 2 numbers */
// function addNumber(a, b){
//     let sum=a+b;
//     console.log("Sum is:", sum);
// }
// addNumber(5,10);


/* Function -> 2 number another method*/ 

// function addNumber(a,b){// local variable
//     console.log("before sum");
//     s=a+b;
//     return s;
//     console.log("after sum"); // never executed after return statement
// }
// let val= addNumber(5,10);
// console.log(val);

/* arrow function */
const arrowMultipication=(a,b)=>{ // fucntion variabal
    console.log("Multipication:", a*b);
} 
arrowSum(5,10);
