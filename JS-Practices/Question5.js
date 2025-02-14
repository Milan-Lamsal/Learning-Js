/* Prompt the user to enter the full name, Generate a username for the them based on the input. Start username with @, follwed by thier full name and ending with the full name length. for eg: user name = " shardhakhapra ", username should be "@shradhakapara13 */
let userName = prompt("Enter your full name:");
let str= userName;
let length = str.length;
console.log(` Your Username is : @ ${userName} and Length is ${length}`);
//only works in browser console