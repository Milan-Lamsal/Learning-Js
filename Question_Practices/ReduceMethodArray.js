// array = [1, 2, 3, 4, 5];
// //Reduce Method Array
// let output = array.reduce((prev, curr)=>{
//     return prev+curr;
// })
// console.log(output);

// Greatest Number in an Array
const arr=[9, 101, 302, 402, 708, 404, 500 , 501  ];
let maxNum=arr.reduce((prev, curr)=>{
    return prev>curr?prev:curr;
})
console.log("Greatest Number:", maxNum);
