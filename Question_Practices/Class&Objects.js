//object
// const student = {
//   name: "Helsinki", // name is the property of student object
//   age: 24,
//   marks: 98, // age is the property of student object

//   printMarks: function () {
//     // it is the method of student object
//     console.log("Marks: ", this.marks); // new keyword it means student.marks
// };
// };

//     // another way to define method of function
//     const employee = { // object 
//       calcTax() { // method of juction 
//         console.log("Tax is 14%");
//       },
//     };

// const teacherStudent = {
//     Salary: 50000,
//     calcTax() {
//         console.log("Tax is 20%");
//     }   
// };
// teacherStudent.__proto__= employee;// prototype   

// +++++++++++++++++++++ Class++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// class Car{

//     // constructor is a special method that is called when an object is created
//     constructor(brand, milage){// it is a method of class
//         console.log("Creating a new object");
//         this.brand=brand; // this is the propery of an object
//     }
//     start(){
//         console.log("Car is starting");
//     }
//     stop(){
//         console.log("Car is stopping");
//     }

//     // setBrand(brand){
//     //     // this.brandName=brand;
//     //     this.brand=brand; // this is the propery of an object
//     // } // kept in constructor 
// }

// let fortuener= new Car("toyota" , 10);// constructor invoked
// console.log(fortuener);
// let lexus = new Car("lexus", 12);// constructor invoked
// console.log(lexus);
// // fortuener.setBrand("Toyota"); //
// // lexus.setBrand("holda");

// +++++++++++++++++++++ Inheritance++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// class Parent{
//     hello(){
//         console.log("Hello from parent");
//     }
// }

// class child extends Parent{}
//     let obj = new child();

// ++++++++++++++++++++++++++ Superkeywords ++++++++++++++++++++++++++++++++++++++++++++++++++++++
class person{

    // constructor(){
    constructor(name){
        // console.log("Enter parent constructor");
        this.species= "Human";
        this.name = name;
    }
    eat(){
        console.log("Person is eating");
    }

    sleep(){
        console.log("Person is sleeping");
    }
}

class Engineering extends person {
    // constructor(branch ){
        // console.log("Enter child constructor");
        constructor(name){
        super(name); // to invoke parent class constructor
        // this.branch = branch;
        // console.log("exit child constructor");
    }
    code(){
        super.eat();
        console.log("Engineering is coding");
    }
}
// let engobj= new Engineering();
// let engobj1= new Engineering("chemical engineering");
let engobj2= new Engineering("Debal");