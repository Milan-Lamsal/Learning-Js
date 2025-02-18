//  changing the dark theme and white theme using button 
let modeBtn=document.querySelector("#mode");// selecting the button as id mode 
let body = document.querySelector("body");

let curreMode= "light"; // if it is dark then light and vice-versa

modeBtn.addEventListener("click", ()=>{
    if(curreMode==="light"){
    curreMode="dark";
    body.classList.add("dark");// by using class list 
    body.classList.remove("light");// light mode

   
    // document.querySelector("body").style.backgroundColor="black";
    }
    else{
        curreMode="light";
        body.classList.add("light"); // by using classList 
        body.classList.remove("dark");
        // document.querySelector("body").style.backgroundColor="white";
    }
    console.log(curreMode);
    
    // console.log("Your are trying to change the mode"); => when you click this it shows this in console
});