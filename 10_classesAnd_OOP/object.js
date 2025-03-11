function multipleBy6(num){
    return num*6;
}
multipleBy6.power=2;
console.log(multipleBy6(6));
console.log(multipleBy6.power); // 2
console.log(multipleBy6.prototype);// {} -> this prototypes give some internal properties as well, like this.usernmae is store in empty curly brackter {}

//  function is function but it can also behave as object how? because at the end of the day all the things get from object, 

function createUser(username, score){
    this.username = username
    this.score= score;
}

createUser.prototype.increment = function(){ // here increment is the method
    this.score++; // jis ne bhi bulaya yeh uska kaam kardo 
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`); // jiska matlab this 
    
}

const Debal= new createUser("Milan", 19)
const Sisir= createUser("sisir", 18)
 
Debal.printMe() //Cannot read properties of undefined (reading 'printMe') -> so we used new keyword 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++ Notes +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * Here is what happens behind the scenes when the new keyword is use :
 * 
 * A new object is create: The new keyword initiates the creation of a new JavaScript object.
 * 
 * A prototypes is Linked. The newly created object gets Lined to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype. 
 * 
 * The constructor is called. The constructor function is caled with the specified aruguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value. (this. )
 * 
 * The new object is returned. After the constructor funtion has been called, if it doesn't return a non-primitive value(object, arrray, function, etc) the newly created object is returned 
 * 
 */