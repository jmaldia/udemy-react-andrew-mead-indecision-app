var nameVar = 'Jose';
nameVar = 'Jon';
console.log('nameVar', nameVar);

let nameLet = 'Jolene';
nameLet = 'Cadence'
console.log('nameLet', nameLet);

const nameConst = 'Christina';
console.log('nameConst', nameConst);

// block scoping

var fullName = 'Jon Maldia';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);