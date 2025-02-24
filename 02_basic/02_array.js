const marvel_heros=["thor", "Ironman", "Spiderman"];
const dc_heros=["superman", "Flash", "batman"];

// marvel_heros.push(dc_heros);// array under array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//  concat properly merge if you create a new variable
// const mix_Heros=marvel_heros.concat(dc_heros);
//  console.log(mix_Heros);// same as above , array under array 

//  Better ways to do as well which is know as "Spread"
const mix_Heros =[...marvel_heros, ...dc_heros]; // ...  is the spread way to do it 
console.log(mix_Heros);

//  flat to separate the array if there is array under array
const another_arry =[1, 2,3,4,5 ,3, [2,6,8], 2, [2, 6, [5, 7 ]]];
const real_another_array= another_arry.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Mouse"));
console.log(Array.from("Mouse"));// make the letter array ['m' ,'o' , 'u', 's','e']

// Interesting need to specify either for keys or value to convert into array otherwise return empty []
console.log(Array.from({name:"Mouse"}));// 

//Instead of "from"we can also use "of" tol make array
let score_1=100;
let score_2=300;
let score_3=500;
console.log(Array.of(score_1, score_2, score_3));
