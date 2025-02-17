// let div = document.querySelector('div');
// console.log(div);

// DOM manipulation Attributes , to get the attributes of an element

// let id = div.getAttribute("id");
// console.log(id);

// let name= div.getAttribute("name");
// console.log(name);

// let para= document.querySelector('p');
// console.log(para);

// DOM manipulation Attributes, to se the attributes of an element
// let para = document.querySelector('p');
// console.log(para.setAttribute("class", "new-class"));// changing the class of an element from para to new-class

// +++++++++++++++++++++++++ Accessing the CSS Styles ++++++++++++++++++++++++++++++++++++++++++++++++++++
// Note Inline style have the highest priority so never you use inline styles.

// let div = document.querySelector('div');// accessing the div element
// div.style.backgroundColor = "red"; // changing the background color of the div to red, writing in camelCase style.

// div.style.fontSize = "24px"; // changing the font size of the div to 24px, changing the style from javaScript.  

// div.innerText = "Hello World"; // changing the value 

// div.style.visibility = "hidden"; // changing the visibility of the div 

// Till Now we have learned about accessing the attributes of an element and changing its CSS styles.


// +++++++++++++++++++++++++ Now Inserting the Elements ( adding new elements) ++++++++++++++++++++++
/** It is a two step process 
 * 1. Create a new element
 * 2. Add the new element the DOM tree
 */
let newButton = document.createElement("button"); // creating a new button element
newButton.innerText = "Click Me"; // setting the text of the button
console.log(newButton);
/**showing button in the screen and there are 4 main methods to add an element in the DOM tree**/
 // node.appendChild(newElement) - Add at the end of the node (inside)

//  let div =document.querySelector("div");// accessing the div element
//  div.append(newButton); // adding the button to the div at the end 
//  div.prepend(newButton); // adding the button to the div at the 
//  div.before(newButton); // adding the button to the div before the existing element
//  div.after(newButton); // adding the button to the div after the existing element

// let para= document.querySelector('p');
// para.after(newButton); // adding the button after the paragraph

let newHeading = document.createElement("h2"); // creating a new heading element
newHeading.innerHTML = "<b> Hello welcome</b>"; // setting the text of the heading with HTML tags

document.querySelector ("body").prepend(newHeading); // adding the heading to the body at the start 

//  +++++++++++++++ Deleting the Elements (removing elements) ++++++++++++++++++++++
let para= document.querySelector('p');
para.remove(); // removing the paragraph from the DOM tree
newHeading.remove();

//Study about Appendchild() and RemoveChild() methods as well from MDN Web Docs.

 