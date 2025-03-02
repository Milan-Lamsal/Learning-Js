# Projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/stackblitz-starters-nlh7umjx?file=script.js)

# Solution code

## Project 1  (BackgroundColor Changer)

```Javascript
let buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

// As it is in node list so we can use for Each loop

buttons.forEach(function (button) {
  console.log(button);

  button.addEventListener('click', function (evnt) {
    console.log(evnt);
    console.log(evnt.target);
    if (evnt.target.id === 'Lion') {
      body.style.backgroundColor = '#aa8f66';
    }
    if (evnt.target.id === 'ButterSoch') {
      body.style.backgroundColor = ' #ed9b40';
    }
    if (evnt.target.id === 'Mint') {
      body.style.backgroundColor = '#61c9a8';
    }
    if (evnt.target.id === 'Cardinal') {
      body.style.backgroundColor = '#ba3b46';
    }
    if (evnt.target.id === 'RoyalBlue') {
      body.style.backgroundColor = 'royalblue';
    }
    if (evnt.target.id === 'AntiqueWhite') {
      body.style.backgroundColor = '#ffeedb';
    }
  });
});

```
 ## Project 2 (BMI Calculator)

 ``` Javascript
 const form = document.querySelector('form');
// let Height = parseInt(document.querySelector('#height').value); -> this usecase will give you empty value

// form is submiited either by POST TYPE  or GET TYPE

form.addEventListener('submit', function (evnt) {
  evnt.preventDefault(); // Prevent form submission to the server:
  let Height = parseInt(document.querySelector('#height').value); // convert into integer using parseInt
  let Weight = parseInt(document.querySelector('#weight').value); // .value is used for form elements like <input>, <textarea>, and <select>, because these elements allow the user to input data, and .value is used to retrieve or set the content of these input fields.
  let Result = document.querySelector('#results');

  if (Height === '' || Height < 0 || isNaN(Height)) {
    //check if a value is "Not-a-Number". It returns true if the value is not a valid number, and false if it is a valid number.
    Result.innerHTML = `Please give a valid height ${Height}`;
  } else if (Weight === '' || Weight < 0 || isNaN(Weight)) {
    Result.innerHTML = `Please give a valid Weight ${Weight}`;
  } else {
    const BMI = (Weight / ((Height * Height) / 10000)).toFixed(2);
    //Show the result
    Result.innerHTML = `<span>${BMI}</span>`;
    if (BMI <= 18.6) {
      Result.innerHTML = `<br>${BMI} is Under Weight so gain weight `;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      Result.innerHTML = `<br>${BMI} is Normal Weight keep it up  `;
    } else {
      Result.innerHTML = `<br>${BMI} is Overweight so go to workout and lose weight `;
    }
  }
});

```
## Project 3 (Digital Clock)

```javascript
const clock = document.getElementById('clock');
//const clock= document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//  Understanding
// setInterval is a built-in JavaScript function that repeats a function at a specified time interval.
// The new Date() function creates a Date object with the current time.
// The time is converted into a human-readable format like 10:45:30 PM.
// The #clock element’s content is updated with the current time.

```