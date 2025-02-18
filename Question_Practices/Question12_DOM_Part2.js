/** Create a new button element. Give in a text "Click me", background color of red and text color of white 
 * Insert the button as the first element inside the body tag.
 */ 
let button= document.createElement("button")
button.innerText= "clicke Me";

button.style.backgroundColor="red";
button.style.color="white";

document.querySelector("body").prepend(button);//Selecting the body and putting the button in the body top

/** QUESTION 2
 * Create a <p> tag in html, give it a class and some styling. Now create a new Class in CSS and try to append this class to the <p> element.
 * 
 * Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classlist.
 * 
 * para.getAttribute("class"); to access the attributes 
 * -class name = para 
 * 
 * para.setAtrribute("class", "newClass");
 * now the class name will be newClass and then attributes in the css will background color will be green , overwrite it .
 * 
 */
let para = document.querySelector("p");
// para.classList.add("newClass");
