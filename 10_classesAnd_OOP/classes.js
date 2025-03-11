// ES -6 -> Syntaxical sugar 

class User{
    constructor(Username, email, password){// whever the new key is used the constructor get called
    this.Username= Username;
    this.password =password;
    }
    encryptPassword(){ // method 
        return `${this.password}abc`
    }
    changeUsername(){
        return`${this.Username.toUpperCase()}`
    }

}
const name = new User("Debal", "debal@1123", "123");
console.log(name.encryptPassword());
console.log(name.changeUsername()); 


//++++++++++++++++++++++++++++++++++++++++++++++++++++  BTS (Behind THE Scene) +++++++++++++++++++++++++++++++++++++++++++++

function User(username, email, password){
    this.Username= username;
    this.email=email;
    this.password =password;

}
User.prototype.encryptPassword =function (){
      return `${this.password}abc`
}
User.prototype.changeUsername =function (){
      return`${this.username.toUpperCase()}`
}
const Name = new User("Milan", "milan@1123", "123");
console.log(Name.encryptPassword());
console.log(Name.changeUsername()); 