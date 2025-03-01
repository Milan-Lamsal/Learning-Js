const myNumbers =[1,2,3,4,5,6,7,8,9,10]

// let newNumber = myNumbers.map ((num) => num +10)
// console.log(newNumber);

//another way to do when you open scope {} use return 

let newNumber = myNumbers.map ((num) => {
    return num +10;
})
console.log(newNumber);

// Chaining two or more method at once 

const newNums =myNumbers
                .map((num)=> num*10) // 10 , 20 , 30 , 40 , 50 ...
                .map((num)=>num+1)// 11, 21, 31, 41, 51, ...
                .filter( (num) => num>=40); //41, 51,  61, 71,81, 91, 101 // filter is true or false, check 

            
console.log(newNums);