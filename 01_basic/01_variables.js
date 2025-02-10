const accountId =202020;
let accoutnEmail="debal@gmail.com";
var accoutnPassword= "12345";
accountCity="Millville";
let accountState; // it will be undefined 

// accountId=2; not allowed 

console.log(accountId);
accoutnEmail="sisir@gmail.com";
accoutnPassword="098765";
accountCity="Toledo"
accountDOB="01/01/2001/"

console.table([accountId, accoutnEmail, accoutnPassword, accountCity, accountState, accountDOB]);
/*
1) Prefer not to use var because of issue in block scope and functional scope
2) In JavaScript it is okay not to have semi colon ; 
3)console.table is used to create a table the output.
4) also it is okay not to declare the type like let or const as you can see in the accountEmail, accountPassword
 */
