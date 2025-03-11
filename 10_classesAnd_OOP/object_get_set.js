const User ={
    _email:"debal@micorsoft.com", // _ shows like private property define 
    _password:"abd",

    get email(){
        return this._email.toLocaleUpperCase()
    },
    
    set email(value){
        this._email=value;
    }
}

const tea =  Object.create(User)//facotry function -> create an object based on the User Object and refer in tea
console.log(tea.email)
