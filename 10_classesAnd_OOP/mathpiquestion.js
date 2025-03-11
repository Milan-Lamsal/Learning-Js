 // Object 

  const descriptor = Object.getOwnPropertyDescriptors(Math, "PI")
//   console.log(descriptor);


//   const myNewObj= Object.create(null)  another way to make object 

const chai ={
    name:"ginger coffee",
    price:450,
    isAvailable:true,
    orderChai:function(){
        console.log("Chai nahi bani")
    }
}
console.log(Object.getOwnPropertyDescriptors(chai, "name"));

//  change property 
Object.defineProperty(chai, "name", {
   // writable:false,
    enumerable:false,
})
// console.log(Object.getOwnPropertyDescriptors(chai, "name"));
// console.log(chai)

// for (let[key, value ] of chai) {
//     console.log(`${key} : ${value}`) //chai is not iterable
    
//}

for (let[key, value ] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`) //
    }
    
}
  

// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI); // still the same 3.14