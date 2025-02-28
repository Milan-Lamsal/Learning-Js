//For
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("When element is 5 it will execute this line");
    }
    console.log(element);    
}
// console.log(element); ReferenceError: element is not defined

// use ctrl d to select all the same value to edit 

// table 0 to 10
for (let i = 1; i <=10; i++) {
    console.log(`Outer Loop value ${i}`)
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner Loop value ${j} and inner Loop ${i}`); 
        console.log(`${i} * ${j}= ${i*j}`);
    }
}

const myArray =["ola", "clay", "Otis"]
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {  // always put i++ increement or decrement otherwise infinite loop
    const element = myArray[index];
    console.log(element);
}

// break and continue
// for (let i = 1; i <=20; i++) {
//     const element = i;
//     if(element==10){
//         console.log(`${element} is detected so break`);
//         break; // totally break
//     }
//     console.log(element); 
// }

for (let i = 1; i <=20; i++) {
    const element = i;
    if(element==10){
        console.log(`${element} is detected so break`);
        continue; // skip but continues 
    }
    console.log(element);
    
}