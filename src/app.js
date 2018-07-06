// import './utils.js';
// import subtract, { square, add } from './utils.js';

// console.log('app is running!!');
// console.log(square(4));
// console.log(add(4, 5));
// console.log(subtract(4, 5));

import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

// const template = <p>test</p>;
const template = React.createElement('p', {}, 'testing 123');

ReactDOM.render(template, document.getElementById('app'));

console.log('email? ', validator.isEmail('jon.actester@gmail.com'));

import isSenior, { isAdult, canDrink } from './person.js';
console.log(isAdult(21));
console.log(canDrink(21));
console.log(isSenior(64));