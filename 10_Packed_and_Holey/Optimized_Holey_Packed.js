// const myArr = []
//     % DebugPrint(myArr) // v-8 engine 
// Two Types of Array 
/**
 * 1) Continuous  
 * 2) Holey array (holes)
 * 
 * Optimize
 * SMI(small Interger )
 * Packed Element( array, number , string) all types 
 * Double(float , string, funciton )
 * 
 * in Array we called Element[1,3,4,5]- They are elements 
 */
const arrTwo = [1, 2, 3, 4, 5] // Packed_SMI_ElEMENTS  -> it is most optimised, best type of array only numbers , can't take decimal as well, pure optimised

const holeArry = [1, 2, 3, , , 4, 5] //HOLES ARRAY 

arrTwo.push(6.0)// Packed_Double_ElELEMNTS // -> Now you can never make Packed SMI elment even if you delelte, once its downgrade then its downgrade 

arrTwo.push('7')// Packed Element  (String)

arrTwo[10] = 11 // Now it has become Holey_ELEMENTS 

console.log(arrTwo); // [1,2,3,4,5,6, '7', <3 empty items>, 11]
console.log(arrTwo.lenth) // 11
console.log(arrTwo[9]);// undefined -as you trying to access the empty elements 

// How does the array find the index vaue

// If there is holes then it goes on checking 

// bound check
// when there is holes - you check the propery hasOwnProperty(arrTwo, 9)
//hasOwnProperty(arrTwo.prototype, 10)

//  As JavaScript is the prototypal Nature, it conitunosly keep on checking 

// hasOwnProperty(Object.prototypes, 10) 

// Holes are very Expensive in JS 

const arrThree = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrThree[8]);// out of bound-Undefined
console.log(arrThree[2]);// -> 3 

// Hightly Optimised Order
//  First SMI > DOUBLE > PACKED

//For Holes Optimised
//Holes_SMI> HOLES_DOUBLE> HOLES_Packed







