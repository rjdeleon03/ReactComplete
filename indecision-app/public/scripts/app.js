"use strict";

// // arguments object - no longer bound with arrow functions
// const add = (a, b) => {
//     return a + b;
// }

// // this keyword - no longer bound with arrow functions
// const user = {
//     name: 'Andrew',
//     cities: ['Nashville', 'New York', 'Dublin'],
//     printPlacesLived: function () {
//         console.log(this.name);
//         console.log(this.cities);
//     }
// };

// Challenge
var multipler = {
    // numbers - array of numbers
    // multiplyBy - single number
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};

console.log(multipler.multiply());
