//  for of loop for Array 
// [" ," ," ,"]
// [{},{},{},{}] -> Object inside array 

const arr =[10,2,3,4,5]
for (const i of arr) { // element can be i , j , k , index and more like a variable
    // for(const array of arr)
    console.log(arr);
    console.log(i);
    
}
const greetings ="Hello World";
for (const i of greetings) { // element can be i , j , k , index and more like a variable
    // for(const greet of greetings)
    // console.log(greetings);
    // console.log(i);
    
}

// Maps  -> it is an object that hold key value pairs , it 
// is known for unique value and doesn't print the same value, it prints in the same order as given

const map = new Map() // 
map.set('NJ', '08332')
map.set('Millville', '08332')
map.set('kathmandu', '08332')
map.set('kathmandu', '08332') // this doesnot print cus it only prints the uniqe as it is already exist above.

 console.log(map);

//  Looping the Map using for of loop
for (const key of map) {
    console.log(key) // [ 'NJ', '08332' ]
                    //[ 'Millville', '08332' ]
                   //[ 'kathmandu', '08332' ]
}

for (const [key, value] of map) { // using square bracket [] now prints the both key and values 
    console.log(key, ':-', value);
    // NJ :- 08332
//Millville :- 08332
//kathmandu :- 08332
}

// Trying to iterate the object like Map -> we can't (myObject is not iterable)
const myObject={
    game1:'NFS',
    game2:'Spiderman'
};
for (const [key, value] of myObject) {
    console.log(key, ":-", value); //myObject is not iterable
}
// Note so For of doesn't work on Object its only for Array
