//singleton 
// Object.create

// object Literals 

const mySymbol= Symbol("key1"); // define , use keyword symbol and then access 

const jsUser = {
    name:"Zoe", // key and value 
    "full name": "Zoe Nikol Harney",
    [mySymbol]:"mykey1", // this is how you declare symbol []
    age:19,
    location:"Ohio",
    email:"zoe@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday", "Tuesday","Wednesday"]
};
console.log(jsUser.age);
// another way to print the object
console.log(jsUser["isLoggedIn"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySymbol]);

//how to change the value of object 

console.log(jsUser.email="zoeharney@googl.com");

// to freeze 
// Object.freeze(jsUser)

jsUser.email ="Zoeharney@microsft.com";
console.log(jsUser);

// Function 
jsUser.greeting =function(){
     console.log("Hello js user");
}
console.log(jsUser.greeting);//undefined 
console.log(jsUser.greeting());//jsUser.greeting is not a function error

jsUser.greetingTwo =function(){
    console.log(`Hello js user${this.name}`); // this is same object refrence , all properties 
    
}

console.log(jsUser.greetingTwo);//undefined 
console.log(jsUser.greetingTwo());//jsUser.greeting is not a function error




