//Create a function to calculate the factorial of a number using closure
//The factorial of a number is the product of all the numbers from 1 to the number itself.
//For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

readline = require('readline-sync');

function factorial(num) {
    let fact = 1;
    return function() {
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }
}

let factorial5 = factorial(5);
console.log(factorial5());

console.log("------------------------------------------------------------------------------------------------------------------------------")

//Write a JavaScript program to test if the first character of a string is uppercase or not, if not then set the first character to uppercase
function firstCharUpperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        return str;
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1,6)+str.charAt(6).toUpperCase()+str.slice(7);
    }
}


//Write a JavaScript program to test if the first character of a string is uppercase or not, if not then set the first character to uppercase using array spilt
function firstCharUpperCaseUsingArray(str) {
    let arr = str.split("");
    if (arr[0] === arr[0].toUpperCase()) {
        return str;
    } else {
        arr[0] = arr[0].toUpperCase();
        return arr.join("");
    }
}



let str = "hello world";
console.log(firstCharUpperCaseUsingArray(str));
console.log(firstCharUpperCase(str));

console.log("------------------------------------------------------------------------------------------------------------------------------")


// sum() returns the sum of these properties.

// mul() returns the multiplication product of these properties.


function Calculator() {
    this.read = function() {
        this.a = parseInt(readline.question("Enter the first number\n"));
        this.b = parseFloat(readline.question("Enter the second number\n"));
    }
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();
console.log("Sum = " + calculator.sum());
console.log("Mul = " + calculator.mul());


console.log("------------------------------------------------------------------------------------------------------------------------------")


//Deep clone Javascript Object (without using any internal methods of cloning). All properties along with functions, prototypes should get cloned to target objects.

//what is deep clone?
//A deep clone is a clone of an object that contains other objects.
//A shallow clone is a clone of an object that contains other objects, but the other objects are not cloned.
//A deep clone is a clone of an object that contains other objects, and the other objects are cloned.


function clone(obj) {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            newObj[key] = clone(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let obj = {
    name: "John",
    age: 30,
    isAdmin: true,
    sayHi: function() {
        alert("Hi");
    }
}

console.log(obj);
let newObj = clone(obj);
console.log(newObj);

console.log("------------------------------------------------------------------------------------------------------------------------------")


// Provided a function that checks the validity of string and returns results via a callback using promises.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
function validateString(input, callback) {
    setTimeout(function () {
    // input is said to be valid if it is a lowercase string
    if (typeof input === "string" && input === input.toLowerCase()) {
         return callback(null, true)
    }
        return callback(new Error('Invalid string'), null)
    }, 500)
} 

let Input=['first', 'Second', 'thiRd', 4, false, 'true']

Promise.all([validateString(Input[0], function(err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
}), validateString(Input[1], function(err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
}), validateString(Input[2], function(err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
}), validateString(Input[3], function(err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
}), validateString(Input[4], function(err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
}), validateString(Input[5], function(err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
})]).then(function(result) {
    console.log(result)
}
).catch(function(err) {
    console.log(err)
}
)


// Check if values in the array (see below example) are valid or not.
//Example
// Input: ['first', 'Second', 'thiRd', 4, false, 'true']
// Output: {"4":false,"first":true,"Second":false,"thiRd":false,"false":false,"true":true}
// you can not use loops or recursion. Also, you should not change the ‘validateString’ function (i.e. use it as it is).



// function validateArray(input, callback) {
//     setTimeout(function() {
//         let result = {};
//         for (let i = 0; i < input.length; i++) {
//             if (typeof input[i] === "string" && input[i] === input[i].toLowerCase()) {
//                 result[input[i]] = true;
//             } else {
//                 result[input[i]] = false;
//             }
//         }
//         return callback(null, result);
//     }, 500);
// }


// let input = ['first', 'Second', 'thiRd', 4, false, 'true']
// validateString(input, function(err, result) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// }
// );













