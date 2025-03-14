let value = 3;
let negativeValue = -value;
console.log(negativeValue);

// Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
console.log(2 ** 3); // power2^2
// console.log(2/2);
//console.log(2%3);

let str1 = "Hello";
let str2 = " World";
let str3 = str1 + str2;// concatination
console.log(str3);

/*What if*/
/*  console.log("1"+2);//=> 12
 console.log(1+"2");//=>12
  console.log("1"+2+2);//=>122
 console.log(1+"2"+2);//=>122
 console.log(1+2+"2");//=>32
 So if the string comes first then all will be string and if the number comes first then it will 
 add and then strin*/

//Special type of Converstion //
console.log(true);
console.log(+true); //=> 1 (increment in true )
//console.log(true+);
console.log(+"");//=> 0

let num1, num2, num3 ;
num1=num2=num3= 2 + 2;

let gameCounter=100;
// gameCounter++; =>postfix operator 
++gameCounter; // prefix operator 
console.log(gameCounter);

/**
 * links to study->https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment =>prefix and postfix js in mdn
 
 * ✔ Prefix (++x, --x): Increments/Decrements first, then returns the new value.
  let x = 5;
  let y = ++x; // x is increased first, then assigned to y.
  
  console.log(x); // 6
  console.log(y); // 6
  
   ✔ Postfix (x++, x--): Returns the original value first, then increments/decrements.
  let a = 5;
  let b = a++; // a is assigned to b first, then incremented.

console.log(a); // 6 (a is increased after assignment)
console.log(b); // 5 (b gets the original value of a)

  
 
 * https://tc39.es/ecma262/multipage/abstract-operations.html // type conversion documentation in tc39 
✅ + prefers concatenation if a string is involved.
✅ -, *, /, % prefer numeric conversion.
✅ Operator precedence applies (*, /, % before +).
✅ Use Number(), String(), Boolean() for explicit conversion.
 */












