//  class based getter and Setter 


class User {
    constructor(email, password){
        this.email=email;
        this.password=password;
    }

    get password(){
        // return this._password.toUpperCase() // need to define setter as well just it can't be alone 
        return `${this._password}Debal`
    }
    get email(){
        return this._email.toUpperCase()
    }
    
    set email(value){
        this._email=value; // never return in setter
    }

    set password(value){
        // this.password= value.toUpperCase();
        // this._password = value.toUpperCase();
         this._password = value; // never return setter 

    }
}
const Debal = new User ("debal@google.com", "abc")
console.log(Debal.password)
console.log(Debal.email)

//++++++++++++++++++++++++++++++++++++++++++++++ Stack Overflow ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 