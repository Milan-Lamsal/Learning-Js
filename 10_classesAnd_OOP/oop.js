// Object literal 

const user = {
    username:"Debal",
    loginCount:9,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username:${username}`); // error ->username is not defined so 
        // console.log(`Username:${this.username}`); // here its talking about the user context 
        // console.log(this); 
        /**
         * {
  username: 'Debal',
  loginCount: 9,
  signedIn: true,
  getUserDetails: [Function: getUserDetails]
}
  //  THIS -> this keyword used for current context 
         */
        
}
}
console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this) // gloabla contex empty but in browser, if you do it will show window object  

// +++++++++++++++++++++++++++++++++ Constructor function  ++++++++++++++++++

// const promiseOne = new Promise()
// const date= new Date() 
// Here new keyword is the constructor function , it allows you to make multiple instances of one object. 

function User(username, loginCount, isLoggedIn){
    // myusername = username // here myusername is the variable , where username is the value but in programming what we do is that we use the keyword called this

    this.username= username;// here this is the variable name. 
    this.isLoggedIn= isLoggedIn;
    this.loginCount= loginCount;

    this.greeting= function (){
        console.log(`Welcome ${this.username}`);
        
    }

     return this
}
const userOne= new User("Debal", 10, true);
const userTwo= new User("Bibika", 11, false); // it override the userOne  so we use new as a keyword 
console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor); // [Function: User] -> reference of own 

// when you write a new keyword ,-> an empty object is created which is called instance, 
/**1 - empty object is created 
 * 2- constructor fucntion is created becuaes of new , 
 * 3- this keyword is injected 
 * 4- you get into function 
 */ 

//  instanceof