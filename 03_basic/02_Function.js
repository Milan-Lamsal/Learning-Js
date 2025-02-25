//  Functions with objects and array in javaScript 
//... 3 dots it is called rest operator or spread operator 

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(2));
// if we have two many argument 
console.log(calculateCartPrice(12 , 200, 460, 280));// only prints 12  so we use  ... rest operator ->[ 12, 200, 460, 280 ]

// interesting 
function calculateCart(val1, val2, ...num1){
    return num1;
}
console.log(calculateCart(12, 300 , 460, 580));

// Function with object 

const user ={
    name:"Debal",
    id:101,
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and its id is ${anyobject.id}`);
}
// handleObject(user);

// passing object directly 
handleObject({
    name:"sam",
    id:102,
})

//  Function with array 

//array 
const newArry=[200, 255, 300, 450];

//function 
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(newArry);// -> [ 200, 255, 300, 450 ]
// console.log(returnSecondValue(newArry)) //->255

console.log(returnSecondValue([200, 400, 800, 1000])) // ->400