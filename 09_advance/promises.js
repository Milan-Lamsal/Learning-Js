// before cosuming we need to understand how to make
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptopraph, network 
    setTimeout(function() {
        console.log('Aync task is complete');
        resolve()
    
    }, 1000);

})
//  Comsumtion of Promises 

promiseOne.then(function(){ // resolve connection is with .then 
console.log("Promise consumee");
}) 

//  another way 

new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log('Async task 2');
        resolve()
    }, 1000);
}).then(function(){
    console.log("Aync 2 resolved");
})

// Third Promise 
const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username:"Debal", email: "debal@gmail.com"}) // we can give data as well 

    } , 1000)

})
promiseThree.then(function(user){
    console.log(user);
})

//  FOURTH PROMISE 
const promisefour = new Promise(function (resolve, reject ){
    setTimeout(function(){
        let error= false //true;
        if(!error){
            resolve({username:"Debal", password:"123"})

        }
        else{
            reject("Eroor 404 !!!!!!")
        }
    },2000)

})
// const username = promisefour.then((user) =>{ // gives error 
//     console.log(user);
//     return user.username
// })
// console.log(username);

promisefour.then((user) =>{ // gives error 
    console.log(user);
    return user.username
 }).then((username)=>{
console.log(username)
 }).catch(function(error){
    console.log(error);
 }).finally( () =>{
    console.log("The promise is either resolved or rejected ")
 })

//   Promise 5 

const promiseFive = new Promise(function (resolve, reject ){
    setTimeout(function(){
        let error= true// false ;
        if(!error){
            resolve({username :"javaScript", password:"abc"})
        }else {
            reject("Error : JSON WENT WRONG")
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive // promise is an object 
    console.log(response);
    }catch (error){
        console.log(error);
    }
}
consumePromiseFive();

//  behind the seen 

// async function getAllUser(){
//    try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);
//     const data = await  response.json() // convert the string data into json but it also takes time to convert into json so need to write await 
//     console.log(data);
//    }catch(error){
//     console.log("Error:",error);
//    }
// }
// getAllUser();

//  writing the same above code in .then and .catch 

// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/Milan-Lamsal')
.then((response)=>{
    return  response.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>console.log("Error "))








// where new keyword  is the instance

//  two parts to make Promise and to consume Promise






// fetch('htpps://slhfalkjdflkf.com').then().catch().finally() 
// Are there is still rea
// +++++++++++++++++++++++++++ Notes +++++++++++++++++++++++++++++++++++++++++++++
/**
 * Promises take call back 
 * resolve or reject  
 */
 // https://stackoverflow.com/questions/34960886/are-there-still-reasons-to-use-promise-libraries-like-q-or-bluebird-now-that-we

 //Are there still reasons to use promise libraries like Q or BlueBird now that we have ES6 promises? [closed]