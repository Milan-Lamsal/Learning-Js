//  this function and Arrow Functiom 

const user ={
    userName: "Debal",
    price: 999,

    welcomeMessage :function(){
        console.log(`${this.userName}, Namaste k cha halkhbhar`);
        console.log(this);// this  -> current context 
    }
}
user.welcomeMessage;//it just give the refrence does not print anything 
user.welcomeMessage(); //-> Debal, Namaste k cha halkhbhar

user.userName="Milan";
user.welcomeMessage(); //->Milan, Namaste k cha halkhbhar

console.log(this); // it return empty object  {}

//+++++++++++++ Important note -> in browser the global object is window object +++++++++++++++++++++++++++++


// function coffee(){
//     let customer="Raul";
//     console.log(this.customer); // this cannot be used in function it is only for object 
// }
// coffee();

// const coffee =function(){
//     let customer="Raul";
//     console.log(this.customer); // -> undefined
// }
// coffee();

//+++++++++++ arrow function ++++++++++++++++++++++++++++++++++++++++++++++++++++++
const coffee = ()=> {
    let customer="Raul";
    console.log(this);//empty {}
    console.log(this.customer);// still undefined 
}
coffee();

//  Explicit return ,when you use return keyword
// const addTwoNumber =(num1, num2)=>{
//     return num1+num2; // ( 5+6) -> 11
// }
// console.log(addTwoNumber(5,6)); 



// Implicit return arrow function 
// const addTwoNumber =(num1, num2)=>num1 +num2; no need to write return keyword but if you use {} then you have to write 

const addTwoNumber =(num1, num2)=>(num1 +num2);// mostly used in react

// Object return 
// const addTwo =(num1, num2)=> {userName:"Debal"} // undefined cus object is not wrap ()c
const addTwo =(num1, num2)=> ({userName:"Debal"}) // to return the object you have to wrap in the ()


console.log(addTwo(6, 6));
console.log(addTwoNumber(5,6)); 

  