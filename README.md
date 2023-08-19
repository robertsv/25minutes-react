npx create-react-app 25minutes-react
npm install react-bootstrap
npm install bootstrap
npm install rxjs

TODO:

- DONE clean SettingsDialog.jsx
- DONE celan Timer.jsx
- DONE clean/refactor App.js
- DONE logo see App.js
- add count down to tab name
- fix clock width
- add scrolling to info section
- TODO add validation to setting dialog input so that only numbers can be added

Notes:

- Understanding Functional Components vs. Class Components in React
  https://www.twilio.com/blog/react-choose-functional-components

Features:

- var a = b ?? 1; // b is null or undefined -> 1 // Nullish coalescing operator (??)

- var a = b || 1; // b is falsy (null, undefined, 0, '', NaN, false) -> 1

- Default Parameters
  function(height = 50) { ... }

- Template literals
  var name = `Your name is ${first} ${last}.`;

- Multi-line Strings
  var fourAgreements = `You have the right to be you. You can only be you when you do your best.`;

- Destructuring
  const {name, surname} = person;
  const [first, second] = ["red", "yellow", "blue", "green", "white", "black"];

- Enhanced Object Literals
  var serviceBase = {port: 3000, url: 'azat.co'},
  getAccounts = function(){return [1,2,3]}
  var accountServiceES5 = {
  port: serviceBase.port,
  url: serviceBase.url,
  getAccounts: getAccounts  
  }

- Arrow Functions
  var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
  var messages = ids.map(value => `ID is ${value}`) // implicit return

* Promises
  ???

* Classes
  ???

* Modules
  // file #1
  export var port = 3000
  export function getAccounts(url) {
  ...
  }
  // file #2
  import {port, getAccounts} from 'module'
  console.log(port) // 3000

  - let and const

  - Converting to boolean using !! operator

  - Converting to number using + operator
    function toNumber(strNumber) {
    return +strNumber;
    }

* Short-circuits conditionals
  if (conected) {
  login();
  }
  // VS
  conected && login();

* for (var i = 0, length = array.length; i < length; i++) {
  console.log(array[i]);
  }

* Optional chaining
  const adventurer = {
  name: 'Alice',
  cat: {
  name: 'Dinah'
  }
  };const dogName = adventurer.dog?.name;
  console.log(dogName);
  // expected output: undefinedconsole.log(adventurer.someNonExistentMethod?.());
  // expected output: undefined

  - Immediately Invoked Function Expression
