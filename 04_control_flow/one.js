// If statement 
// compare- > < , > , <= ,>= , ==, != , ===  , !== -> check type as well 

// if(true){

// }
// if(false){

// }


if(2=="2"){
    console.log("If you used == then it will print ");
}
if(2==="2"){
    console.log("If you used === then it will not print ");
}

// Important things to note about scope 

const score=200;
if(score<300){
    let power= "max";
    console.log( `Your power is ${power}`);
}
// console.log( `Your power is ${power}`);// this line will not print and gives error cus it is trying to acces the variable power outsize of block scope. {ReferenceError: power is not defined}

const balance=400;
// if(balance<600) console.log(`print ${balance}`), console.log(" you are balance is less"); -> the scope is until the semicolon but never use such kind of line, its not preffered

//  Nesting 

const balanced =1000;
if(balanced<500){
    console.log("less than 500");
}else if (balanced<750){
    console.log("less than 750");
}else if(balanced<900){
    console.log("less than 900");
} else{
    console.log("less than 1200");
}

// Real life uses 

const userLoggedIn=true;
const debitCard =true;
if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy");
}

const loggedInFromGoogle= true;
const loggedInFromEmail=true;
if(loggedInFromEmail|| loggedInFromGoogle){ // logical OR
    console.log("logined ");
}

// Notes
// This or that control
// compare ,true or false
// ===
// scope
// if , else if , else if , else , 
// AND OR, NOT ,
