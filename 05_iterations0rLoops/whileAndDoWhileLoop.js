// while (condition) {
    
// }

// let i=0
// while (i<=10) {
//     console.log(`value of i is ${i}`)
//     i+=2;
    
// }

let myArray =['flas', 'superman', 'batman']
let i=0
while (i<myArray.length) {
    console.log(`${myArray[i]}`);
    console.log(`${myArray}`);
    i=i+1;
}

// do while loop
let score=11;
do {
    console.log(`Score is ${score}`);// it print first then check conditions
    score++;
} while (score<=10);