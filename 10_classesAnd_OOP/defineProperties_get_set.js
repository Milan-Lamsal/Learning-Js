// like old times 

function User(email, password){
    this._email= email;
    this._password = password

    Object.defineProperty(this, "email", {
        get:function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email=value;
        }
    }) // need to give context , this and object  
}
    Object.defineProperty(this, "password", {
        get:function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password=value;
        }
    }) // need to give context , this and object  

const chai = new User("chai@google.com", "chai")
console.log(chai.email);