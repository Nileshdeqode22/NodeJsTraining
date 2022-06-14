//Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or higher than the value 10.

readline = require('readline-sync');
function testNum(num) {
    return new Promise((resolve, reject) => {
        if (num < 10) {
            resolve(`${num} is less than 10`);
        } else {
            reject(`${num} is higher than 10`);
        }
    });
}

let num = parseInt(readline.question("Enter a number\n"));
testNum(num).then(function(result) {
    console.log(result);
}
).catch(function(error) {
    console.log(error);
}
);

//Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the Array contains anything but Strings, it should throw an error.


function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        if (arr.every(item => typeof item === "string")) {
            resolve(arr.map(item => item.toUpperCase()));
        } else {
            reject("Array contains non-string values");
        }
    });
}

let arr = ["hello", "world", "this", "is", "a", "test"];
makeAllCaps(arr).then(function(result) {
    console.log(result);
}
).catch(function(error) {
    console.log(error);
}
);


sortWords = function (arr) {
    return new Promise((resolve, reject) => {
        if (arr.every(item => typeof item === "string")) {
            resolve(arr.sort());
        } else {
            reject("Array contains non-string values");
        }
    });
}


sortWords(arr).then(function (result) {
    console.log(result);
}
).catch(function (error) {
    console.log(error);
}
);


//Using Promise create a function named 'sleep' that should invoke a callback function after x seconds. NOTE: sleep function should not block the call stack.

function sleep(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, x * 1000);
    });
}

let x = parseInt(readline.question("Enter a number\n"));
sleep(x).then(function () {
    console.log("Done");
}
).catch(function (error) {
    console.log(error);
}
);

