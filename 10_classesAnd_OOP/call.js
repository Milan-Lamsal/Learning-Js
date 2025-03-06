//Call

function SetUsername(username){
    //complex DB calls
    this.username= this.username
    console.log("called");
}

function createUser(username, eamil, password){
    SetUsername.call(this, username)

    this.eamil=eamil;
    this.password= password;
}

const name= new createUser("Sharma", "sharma@gmail.com", "098767");
console.log(name); //createUser { eamil: 'sharma@gmail.com', password: '098767' }


//  SetUsername.call(this, username) this line generate the following because of "this"
/*createUser {
    username: undefined,
    eamil: 'sharma@gmail.com',
    password: '098767'
  }
*/