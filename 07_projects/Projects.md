# Projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/stackblitz-starters-nf3qtkes?file=package.json)

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

## Project 4 (Guess the Number)

```javascript 
//  Random Number
let randomNumber = parseInt(Math.random() * 100 + 1);

// To take different numbers
const submit = document.querySelector('#subt');
// user input from guess field
const userInput = document.querySelector('#guessField');
const guessesSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const low0rHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// function -> Validate if the number is between 1 to 100,
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid Number🥲');
  } else if (guess < 1) {
    alert('Please enter a Number bigger than 1 🥲');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over🥲🥲 Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// checkGuess -> if the value is equal to random number, if low then low, if high high,
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed the Right Number!!!!🥳🥳🥳🥳`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO High`);
  }
}

//-> next value, clean , update the guess, remaning guess
function displayGuess(guess) {
  userInput.value = '';
  guessesSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  low0rHigh.innerHTML = `<h2> ${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id= "newGame"> Stat New Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessesSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```