'use strict';

let leftClick = false;
let rightClick = false;

function displayMessage(message) {
  const div = document.createElement('div');

  div.textContent = message;
  document.body.appendChild(div);
}

const leftClickPromise = new Promise((resolve) => {
  document.addEventListener(
    'click',
    () => {
      if (!leftClick) {
        leftClick = true;
        displayMessage('First promise was resolved');
        resolve();
      }
    },
    { once: true },
  );
});

const rightClickPromise = new Promise((resolve) => {
  document.addEventListener(
    'contextmenu',
    () => {
      if (!rightClick) {
        rightClick = true;
        displayMessage('Second promise was resolved');
        resolve();
      }
    },
    { once: true },
  );
});

const bothClicksPromise = Promise.all([
  leftClickPromise,
  rightClickPromise,
]).then(() => {
  displayMessage('Third promise was resolved');
});

bothClicksPromise.then(() => {});
