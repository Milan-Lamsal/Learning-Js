class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{ // all the function is available to Teacher now 
    constructor(username, email, password){
        super(username)// 
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }

}

const chai =  new Teacher("C-Fourtune", "cfouturne@gmail.com",  "1234") //Class constructor Teacher cannot be invoked without 'new'

// after new -> a new course was added by C-Fourtune
chai.addCourse();
chai.logMe()


const coffee=  new User("masalachai")
// coffee.addCourse(); // does not have access 

coffee.logMe()

console.log(chai === coffee); // false 
console.log(chai === Teacher); // false 
console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true

