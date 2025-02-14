const score= 100;
console.log(score);

const balance = new Number(100);// new keyword is used for int or number
console.log(balance);

console.log(balance.toString().length);// converting into string and checking the length 
console.log(balance.toFixed(2));// after decimal .00

const otherNumber =232.5252;
console.log(otherNumber.toPrecision(4));// to become precise

const hundreds= 1000000;
console.log(hundreds.toLocaleString());// It gives commas to the number 

// ++++++++++++++++++          MATH     +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);// it is a object
console.log(Math.abs(-4));// change Negative to Postive but doesnot change Positive to Negative
console.log(Math.round(7.8));// it rounds off the number
console.log(Math.ceil(7.1));// takes round off to the next number 7.8=>8
console.log(Math.floor(7.9));// round off the same value  7.9=>7
console.log(Math.min(4,5, 6,5,2,1));
console.log(Math.max(4,5, 6,5,2,1));

console.log(Math.random());// value between 0 and 1
console.log((Math.random()*10) +1);// guarantee above 0
console.log((Math.floor(Math.random()*10)) +1);// gives between 1 to 9

const min=10;
const max=20;

 console.log(Math.floor(Math.random()*(max-min +1))+min); // number between 10 and 20 