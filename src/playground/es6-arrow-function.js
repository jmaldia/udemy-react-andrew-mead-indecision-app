const square = function(x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// }

// Arrow function expression syntax
const squareArrow = (x) => x * x;

console.log(squareArrow(9));
console.log(square(8));

// Challenge - Use Arrow Functions

// Regular Arrow
// let getFirstName = (fullName) => {
//     let firstName = fullName.split(' ')[0];
//     return firstName
// }

// Function Expression Arrow
let getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Cadence Maldia'));