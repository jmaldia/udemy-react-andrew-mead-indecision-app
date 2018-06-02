'use strict';

// arguments object - no longer bound
// when access it, it doesn't work

var add = function add(a, b) {
    console.log(arguments); // prints out all the arguments
    return a + b;
};

console.log(add(1, 2, 3)); // is accessible to function

var addArrow = function addArrow(a, b) {
    // console.log(arguments); // will error
    return a + b;
};

// this keyword - no longer bound
var user = {
    name: 'Jon',
    cities: ['Manila', 'Chicago', 'New York'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        console.log(this.name);
        console.log(this.cities);

        // workaround that = this

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();
