//  You are creating a website for your college. Create a class User with two properties, name and email. It also has a method called viewData() that allows user to view website Data

let Data = "Private information";
class User{
    constructor(name, email){
        this.name = name; 
        this.email = email;
    }
    viewData(){
        console.log("Data =", Data);
    
}
}   

//creat user instances 
let student1 = new User("John", "john@gmail.com");
let student2 = new User("Doe", "doe@gmail.com");

let teacher= new User("krish", "krish@gmal.com");

// ++++++++++++++++++++++++++++++++++++++  Q2 ++++++++++++++++++++++++++++++++++++++++++++++++

//  Create a new class called Admin which inherits from User. Add a new method claled editData to Admin that allows it to edit website data.

class Admin extends User{
    constructor(name, email){
        super(name, email);// calling to parent class constructor
    }
    editData() {
        Data =" Some new value";
    }
}

let admin = new Admin("admin", "adming@gmail.com");

