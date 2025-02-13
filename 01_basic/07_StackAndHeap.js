// stack (primitive ), heap (Non Primitive)
let myName="MilanLamsal";
let anotherName= myName;
anotherName= "DebalLamsal";

console.log(myName);
console.log(anotherName);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let user ={
    email: "user123@gmail.com",
    age:25,
};

let userTwo= user;
userTwo.email= "user2@gmail.com";
console.log(user.email);
console.log(userTwo.email);