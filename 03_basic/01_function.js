function myName(){ // Function Defination , Function keyword, Name ,
console.log("M");
console.log("I");
console.log("L");
console.log("A");
console.log("N");
}
//myName-> reference 
myName(); // myName()-> Execute or execution 

function Sum(a , b){ //    a and b are called parameters as it in function defination 
    console.log(a+b);
}
Sum(); //NAN cus no value or no arguement 
Sum(15 ,15); // 15 and 15 are called Argument 
Sum(15 ,"15"); 
Sum(15 ,"a"); 
Sum(15 ,undefined); 

// 


function addTwoNumbers(number1 , number2){ 
    console.log(number1+number2);
}
// addTwoNumbers(5 ,3);
// const result= addTwoNumbers(5 ,3); // 8
// console.log("Result =", result); // Result = undefined

// using return 

function addTwoNumbers(number1 , number2){ 
    // let result= number1+number2;
    // return result;
    // console.log("won't execute cus its written after return ");
    return number1+number2;
}
// if you use return keywords then you can use the variable like below can't do just console.log
const result = addTwoNumbers(10, 10);
console.log(result);

//  how many ways can we put the value or pass the value 

// function isLoggeIn(username){
//     return `${username}  just logged in `; // ${}-> we put the variable name, ``  backtick string interpolation
// }
// isLoggeIn("Debal"); // doesnt' do anything cause we have used return so make sure you use console or varibale to store 

// let LoggedIn= isLoggeIn("Debal");
// console.log(LoggedIn);

// console.log(isLoggeIn("Debal")); 
// console.log(isLoggeIn(""));  // if you pass empty string   then -> just logged in  
// console.log(isLoggeIn());  // if you don't pass any value  then -> undefined  just logged in 

// little bit of if else 
function isLoggeIn(username){ // we can give default value as well function isloggedIn(username ="SAMI") and if the value is ////given then it will be override 
    if(username === undefined){ // or if(!username)
        console.log("Please enter the username " );
        return;

    }
    return `${username}  just logged in `; // ${}-> we put the variable name, ``  backtick string interpolation
}
isLoggeIn("Debal"); // doesnt' do anything cause we have used return so make sure you use console or varibale to store 

let LoggedIn= isLoggeIn("Debal");
console.log(LoggedIn);

console.log(isLoggeIn("Debal")); 
console.log(isLoggeIn(""));  // if you pass empty string   then -> just logged in  
console.log(isLoggeIn()); 







