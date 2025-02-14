// For a given area with marks of studentFor a given area with marks of student.[85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.

// let marks= [85, 97, 44, 37, 76, 60];
// let sum=0;
// for (let i=0; i<marks.length; i++){
//     sum=sum+marks[i]; // summing up all the marks of the students
   
// }
// let average= sum/marks.length;
// console.log(`average marks of the class is ${average}`);

// For a given array with preces of 5 item-> [250, 645, 300, 900 ,50] All items have an offer of 10% off on them change the array to store final price after applying offer.

let prices=[250, 645, 300, 900 ,50];
let priceAfterDiscount=0;
let finaPrice=0;
for(let i= 0; i<prices.length; i++){
    finalPrice= (10/100)*prices[i];
    priceAfterDiscount= prices[i]-finalPrice
    console.log(`final price after 10% discount is ${priceAfterDiscount}`);

}