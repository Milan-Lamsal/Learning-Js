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
