// For each loop in arry 

const coding =["js","ruby", "python", "Cpp"]
coding.forEach( function (value) {
    console.log(value);
})

/**How to write for each syntax 
 * write function greet() {}
 * call back function does not have name so remove name 
 * coding.forEach( function (){}) -> removing the name 
 * coding.forEach( function(itmes ){})  -> put any value in () paranthesis so 
 * 
 * FINALLY 
 * 
 * coding.forEach( function (val) {
 * console.log(val)
 * 
 * })
 *  */ 

//  arrow Function 
/**
 * coding.forEach( () =>{})                we don't write the function keyword   
 * coding.forEach( (value)=>{               =now put the value - 
 * console.log(value)
 * })
 * })
 */

coding.forEach( (val)=>{
    console.log(`This is from arrow function \n ${val}`);
})

// Differnet one giving reference 

function printMe(item){
    console.log(item);
}

coding.forEach(printMe); // giving reference don not execute  coding.forEach(printMe ()); cus its printing above so  we can use as a reference as well 

// Interesesting for each has more than just parameters, not just val,or items it has index, or arry 

coding.forEach( (value, index, arr)=>{ // different parameters 
    console.log(` for Each loop had more than just one parameters and they are value: ${value}, index: ${index} ,arr: ${arr}`);

    console.log(value, index, arr)
})

//  Object inside Array  [ {}, {}, {} ]
// don't forget to give commas [{}, {}]
//  Need to know cus when the data comes from data base it comes in the form of Array and each data is in the form of object
const myCoding =[
    {
        languageName: "JavaScript",
        languageFileName:"js"
    },
    {
        languageName: "C++",
        languageFileName:"cpp"
    },
    {
        languageName: "Python",
        languageFileName:"py"
    }
]
myCoding.forEach( (item, index , arr)=>{
    console.log(item.languageFileName);
    console.log(item.languageName);
    
    // console.log(item, index, arr);

})

 // myCoding.forEach( () =>{}) the inside parameters is call Callback
