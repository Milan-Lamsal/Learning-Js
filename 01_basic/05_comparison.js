// console.log(2>1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// different dataypes

console.log("2" > 1);
console.log("02" > 1);
//here string 2 is converted into the number .

console.log(null == 0);
console.log(null < 0);
console.log(null > 0);
console.log(null >= 0);
console.log(null <= 0);


/* The reason is that an equality check == and comparison > <>= <= work differently
Comparisons convert null to a number, treating it as 0  Thats why null >=0 is true and null >0 is false*/


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

//  === which also check datatype for eg

console.log("2" === 2);

// -> false because it check dataype as well but if you look above it says    true. cus it didn't check any dataype rather it converted string into a number 






