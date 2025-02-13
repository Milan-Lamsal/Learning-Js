const name= "Milan";
const repoCount=5;
// console.log(name+repoCout+" value"); old methods 

// BackTicks
console.log(`Hello my Name is ${name} and my Repocount is ${repoCount} `);

// Anotherway to Declare String

const userName = new String(`Milan`)
console.log(userName);
console.log(userName[0]);
console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.charAt('2'));// to find the character of that index
console.log(userName.indexOf('n'));// to find the index of that char

const newString= userName.substring(0, 2); // two is not included and cannot give negative value
console.log(newString);

const anotherString= userName.slice(1, 2);
console.log(anotherString);

const newStringOne= "          Debal         ";
console.log(newStringOne);
console.log(newStringOne.trim());// to trim the whitespace as above 

const number= "1234";
console.log(number.replace('2', '4'));// to replace the value

console.log(number.includes('4'));// to check if the value is present or note 

let gameName= "Hello-Chess-com";
console.log(gameName.split('-'));// to change the string into array



