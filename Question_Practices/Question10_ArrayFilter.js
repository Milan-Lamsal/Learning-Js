//  wer are given array of marks of students .Filter out of the marks of studetns that scored 90+

// let mark=[98, 97 ,97, 67 ,92, 90, 91, 99];
// let marksAbove90=mark.filter((val)=>{
//     return val>=90;
// })

// console.log(marksAbove90); // [98, 97, 97, 92, 90, 91, 99]

// Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate the sum of all the numbers in the array. Use the reduce method to calculate the product of all the numbers in the array.
let n = prompt("Enter a number:");
let arr=[];
for(let i=1; i<=n; i++){
    arr[i-1]=i;//1(0),2(1), 3(2), 4(3), 5(4)....
}
let sumOfArry=arr.reduce((inital, current)=>{
    return inital+current;
    
})
console.log(sumOfArry);

let prodOfArry=arr.reduce((inital, current)=>{
    return inital*current;

})
console.log(prodOfArry);




