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
    printPlacesLived: function() {
        console.log(this.name);
        console.log(this.cities);

        // workaround that = this

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
}

user.printPlacesLived();

