let btn1= document.querySelector("#btn1");// accesing button with button id #btn1 

// btn1.onclick = ()=>{
//     console.log("Button was clicked 1");
//     let a =25;
//     a++;
//     console.log(a);// 26

// };
// btn1.onclick = ()=>{
//     console.log("Button was clicked 2");
//     let a =25;
//     a++;
//     console.log(a);// 26
//     //  This is going to overwrite the above btn1.onclick
// };

// btn1.onclick = (e)=>{
//     console.log(e);
//     console.log(e.type); // show the type 
//     console.log(e.target); // it shows the target <button id="btn1">Click Me</button> 
//     console.log(e.clientX); //horizontally 
//     console.log(e.clientY); // horizontally 
    
    /* it prints the event object value, which has a lots of data , like it show  like this one target:button#btn1
    type: "Click"
    clientX: 33 =>horizontally 
    clientY: 16 => horizontally 
    */   
// };

let div= document.querySelector("div");

div.onmouseover=()=>{
console.log("You ar inside the div");


};

// +++++++++++++++++++++++++++++++++ Event Listener   +++++++++++++++++++++++++++++++++++++++++++++++

 btn1.addEventListener("click", ()=>{
    console.log("Button1 was clicked handler 1");

 });
 btn1.addEventListener("click", ()=>{
    console.log("Button1 was clicked handler 2");

 });

//   you can see that this doesn't not overwrite and same event multiple work can be done also can pass object 

btn1.addEventListener("click", (e)=>{
    console.log("Button1 was clicked handler 3");
    console.log(e);// event objet 
    console.log(e.type);
    console.log(e.target); // it shows the target <button id="btn1">Click Me</button> 
    console.log(e.clientX); //horizontally 
    console.log(e.clientY);


 });

//  +++++++++++++++++++++++++++++++++ RemoveEventlistener Function ++++++++++++++++++++++++++++++++++++
//   whenever you want to remove the function in eventlistener then we store that function in the form of variable:

 const handler4 =()=>{
 console.log("Button was clicked -handler 4"); //declaring functio variable
 };
btn1.addEventListener("click", handler4);// first event Listener add

btn1.addEventListener("click", ()=>{
     console.log("Button1 was clicked handler 5");
 });



 btn1.removeEventListener("click", handler4 ); // here handler 4 is removed 