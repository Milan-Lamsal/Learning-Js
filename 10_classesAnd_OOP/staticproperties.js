// Props 

class User {
    constructor(username){
        this.username= username;
    }

    //Method 

    logMe(){
        console.log(`Username:${this.username}`); 
    }
    static  createId(){ // static prevent to get access 
        return`123`
    }
}
const Debal = new User("Debal")
// console.log(Debal.createId());

class Teacher extends User {
    constructor(username,email){
        super(username) // this , call 
        this.email=email
    }
}
const iphone = new Teacher("Iphone", "iphone@gmail.com")
iphone.logMe();
console.log(iphone.createId()); // because of static  -> iphone.createId is not a function