let myName = "Debal     "
let myLinkedin = "Milan    "

// console.log(myName.length);
console.log(myName.truelength);
console.log(myName.trim().length);// method  (METHOD AND PROPERTIES)

let myHeros = ["Thor", "batman"];

let heroPower ={

    thor: "hammer",
    batman:"fly",

    getSpiderPower: function (){ //method 

        console.log(`thor power is ${this.thor}`);
        
    }
}
Object.prototype.Debal = function(){
    console.log(`Debal is present in all object `);
}

Array.prototype.heyDebal =function(){
    console.log('Debal says hello');
    
}


// heroPower.Debal();
myHeros.Debal();
myHeros.heyDebal(); // Debal says hello - Array has the power 
// heroPower.heyDebal(); //heroPower.heyDebal is not a function, Object does not have it 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++ Inheritance +++++++++++++++++++++++++++++++++++++++++++++

const user={
    name:"Debal",
    email:"debal@gmail.com"
}
const Teacher ={
    makeVideo: true
}
const TeachingSupport ={
    isAvailable: false
}
const TASupport ={
    makeAssignment :` Js Assignment`,
    fullTime: true,
    __proto__: TeachingSupport             // syntax which is __ proto__ underscore underscore proto underscore underscore -> Taking the property of TeachingSupport 
}           
Teacher. __proto__ = user; // this is the prototype inheritance , accessing other properties and these are outdated one __proto__


// ++++++++++++++++++++++++++++++++++++++++++++++   Modern Syntax +++++++++++++++++++++++++++++++++++++++

Object.setPrototypeOf(TeachingSupport, Teacher) // get the property of teacher by teachingSupport 

let anotherUsername= "Zoe   "
String.prototype.trueLength = function (){
    console.log(`${this}`); // Zoe  
    // console.log(`${this.name}`); =>undefined
    console.log(`True lenght is:${this.trim().length}`); // True lenght is:3
    

}
anotherUsername.trueLength() // True lenght is:3
"Debal".trueLength() //True lenght is:5
"iceTea".trueLength() //True lenght is:6


//++++++++++++++++++++++++++++  Methods and Properties  +++++++++++++++++++++++++++++++++++++++++++++
/**const person = {
    name: "John",  // Property
    age: 30,  // Property
    greet: function() {  // Method
      console.log("Hello, " + this.name);
    }
  };
  
  console.log(person.name);  // Accessing a property
  person.greet();  // Calling a method

  In this example:
name and age are properties that hold information about the person.
greet() is a method that performs an action (it prints a greeting using the name property).

  */
  