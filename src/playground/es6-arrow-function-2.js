// arguments object - no longer bound
// when access it, it doesn't work

const add = function(a, b) {
    console.log(arguments); // prints out all the arguments
    return a + b
}

console.log(add(1, 2, 3)); // is accessible to function

const addArrow = (a, b) => {
    // console.log(arguments); // will error
    return a + b;
}

// this keyword - no longer bound
const user = {
    name: 'Jon',
    cities: ['Manila', 'Chicago', 'New York'],
    printPlacesLived() {
        // console.log(this.name)
        // console.log(this.cities);

        // // workaround that = this

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });

        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());


// Challenge
const multiplier = {
    // array of numbers to multiply
    // multiply by, single number
    // get a new array
    // method called multiply, return new array with numbers multiplied

    arrayOfNum: [2, 3, 5, 17],
    multiplier: 4,
    multiply() {
        return this.arrayOfNum.map((num) => num * this.multiplier);
    }
}
console.log(multiplier.multiply());