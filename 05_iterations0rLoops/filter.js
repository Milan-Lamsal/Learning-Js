// Filter map and reduce

// Does forEach return ?

// const coding =["js","ruby", "python", "Cpp"]

// const items = coding.forEach( function (value) {
//     // console.log(value);
//     // you have to say manually to return the value but 
//     return value;
// })
// console.log(items);

//  from above example we can know that it does not return anytype of value 

//  +++++++++++++++++++++++++++++++++++++++++ FILTER +++++++++++++++++++++++__________

const myNums=[1,2,3,4,5,6,7,9];
// let newNums=myNums.filter( (num)=>num >4) // num>4 is the condititon and true value is returned to the newNums
// console.log(newNums)

let newNums=myNums.filter( (num)=>{ // if you open scope -"{}" " then you always have to write return keyword
    return num>4; // [][ 5, 6, 7, 9 ]
   
 
})
console.log(newNums);

const books = [
    {title: 'Book one ', genre:'Fiction', publish:1891, edition:2004},
    {title: 'Book two ', genre:'Non Fiction', publish:1879, edition:2004},
    {title: 'Book three ', genre:'History', publish:2091, edition:2054},
    {title: 'Book four  ', genre:'Science', publish:1890, edition:2004},
    {title: 'Book_six ', genre:'History', publish:2028, edition:21004},
    {title: 'Book_six ', genre:'Thriller', publish:1890, edition:2054},
];
// let userBook = books.filter((bk) => bk.genre==='History');
// const userBook =books.filter( (bk)=> bk.publish>=2000);  1 st method
let userBook =books.filter( (bk)=>{ 
     return bk.title.trim() =="Book_six" && bk.genre=='History'; // 2nd method where you opened the scope {} which mean need to write return keywords
    //   Use .trim() to remove whitespace
});
console.log(userBook);
/**
 * [
  {
    title: 'Book three ',
    genre: 'History',
    publish: 1891,
    edition: 2054
  },
  {
    title: 'Book five ',
    genre: 'History',
    publish: 1028,
    edition: 21004
  }
]
 */
