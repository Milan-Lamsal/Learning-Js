  //Two ways to declare objects 
 const tinderUser = new Object();  //singleton Object
 console.log(tinderUser);

  //Another way 

const tinderUsers ={};//object literal 
tinderUsers.id= "101";
 tinderUsers.name ="Samay";
 tinderUsers.isLoggedIn= false;

 console.log(tinderUsers);

 const regularUser={
     email:"abc@gmail.com", 
      fullname:{ //object under object , nested object 
         userfullname:{
             firstname:"Ola",
             lastname:"clay"
         }
     }

    }
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

//  merging or combining objects 
const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj4={5:"e", 6:"f"}

 //const obj3 ={obj1, obj2};
 //console.log(obj3); //object under object , { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//const  obj3 =Object.assign({}, obj1, obj2, obj4);
// The empty object {} acts as the target object where properties from obj1 and obj2 will be copied. This ensures that the original objects remain unchanged, where empty is the target and other are the source 

//  +++++++++++++++++      spread object,  ++++++++++ latest++++++++++++++++   take a glass and drop it  ...obj1, ...obj2 /

const obj3= {...obj1, ...obj2, ...obj4}// 90% time you will used this one 
console.log(obj3);

//  when the values comes from Database  ->array of objects

const users =[
    {
        id:1,
        email:"abcd@gmail.com",

    },
    {
        id:2,
        email:"abcde@gmail.com",

    },
    {
        id:3,
        email:"abcdf@gmail.com",

    },
]
users[1].email
console.log(tinderUsers);

console.log(Object.keys(tinderUsers));// provides all the key in the form of array , now you can loop,  
console.log(Object.values(tinderUsers));// provides all the values in the form of array , now you can loop, 
console.log(Object.entries(tinderUsers));//  [ [ 'id', '101' ], [ 'name', 'Samay' ], [ 'isLoggedIn', false ] ]
//  in object the first property is always key and second is value 



console.log(tinderUsers.hasOwnProperty('isLoggedIn'));// ask the object if it has the property  -> true 
console.log(tinderUsers.hasOwnProperty('isLogged'));// ask the object if it has the property -> false 

