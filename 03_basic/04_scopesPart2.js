//  Nested Scope in function 

function one(){
    const userName="Debal";

    function two(){
        const website="Youtube";
        console.log(userName);
    }
    // console.log(website); -> ReferenceError: website is not defined out of block scope 

    two() // Debal
}
one() // 

//  Nested Loop in if-else

if(true){
    const userName="Debal";
    if(userName=="Debal"){
        const website =" Youtube"
        console.log(userName + website);
    }
    // console.log(website); -> ReferenceError: website is not defined
}
// console.log(userName); // -> ReferenceError: userName is not defined

// +++++++++++++++++++++++++++++++++++++++ Intereseting Concept +++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
addone(5); // not a problem 
function addone(num){

    return num+1
}
 // It has been returned but the value is not printed 


// addTwo(5) -> ReferenceError: Cannot access 'addTwo' before initialization // there is a problem 
const addTwo = function(num){// sometimes it is called Expression 
    return num +2
}
// addTwo(5)

// ++++++++++ this is realted to hosting ++++++++++++++