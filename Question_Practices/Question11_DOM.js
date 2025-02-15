/* Create a H2 heading elements with text- "Hello JavaScript " Append "From New Jersey " to to this text using JS*/

// let heading =document.querySelector("h2");
// console.log(heading.innerText);

// heading.innerText= heading.innerText+"From New Jersey";

// let heading =document.querySelector("h2");
// console.dir(heading.innerText);

//  heading.innerText= heading.innerText + " From New Jersey";

//  ++ Q3 Create 3 divs with common class name -"box". Access them and add some unique text to each of them  ++

let divs=document.querySelectorAll(".Box");
//  console.dir(div);
// console.log(div)
// console.log(div[0]);
// console.log(div[1]);
// console.log(div[2]);

// div[0].innerText="NEW VALUE 1";
// div[1].innerText="NEW VALUE 2";
// div[2].innerText="NEW VALUE 3";

let i=1;
for(let div of divs){
    div.innerText=`New Value ${i}`;
    i++;
}



