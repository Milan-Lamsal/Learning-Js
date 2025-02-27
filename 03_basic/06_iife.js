// Immediately Invoked Function Expression(IIFE) ->
// Function that exectue immediately and To prevent the global pollution 

//  To prevent from the global scope pollute 

function coffee(){
    console.log(`Data Base Connected`);
}
coffee();

// IIFE use before writing funciton keyword use-> () before function defination and () executiohn ()()
// point to be noted after the () execution always but ; to end the execution other wise it will not create error in below line

(function coffee(){ 
    // Named IIFE
    console.log(`Data Base Connected`);
})(); // here if I don't use the semicolon ; then below part wont run and cure error 


// arrow function 
(()=>{
    console.log(`Data Base Connected`);
})();

((name)=>{
    // Simple IIFE, or unnamed IIFE, parameter pass 
    console.log(`Data BaseTwo Connected${name}`);
})("Debal");

//  Important notes 
//  Named IIFE
// Simple IIFE, or unnamed IIFE, parameter pass 
// two IIFE writing after one another should be separated by ; otherwise wont run

