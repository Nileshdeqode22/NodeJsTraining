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


function makeAllCaps(arr1) {
    return new Promise((resolve, reject) => {
        if (arr1.every(item => typeof item === "string")) {
            resolve(arr1.map(item => item.toUpperCase()));
        } else {
            reject("Array contains non-string values");
        }
    });
}

let arr1 = ["hello", "world", "this", "is", "a", "test"];
makeAllCaps(arr1).then(function(result) {
    console.log(result);
}
).catch(function(error) {
    console.log(error);
}
);


sortWords = function (arr1) {
    return new Promise((resolve, reject) => {
        if (arr1.every(item => typeof item === "string")) {
            resolve(arr1.sort());
        } else {
            reject("Array contains non-string values");
        }
    });
}


sortWords(arr1).then(function (result) {
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

//Let's assume that we have a for loop that prints 0 to 10 at random intervals (0 to 6 seconds). We need to modify it using promises to print sequentially 0 to 10. For example, if 0 takes 6 seconds to print and 1 takes two seconds to print, then 1 should wait for 0 to print, and so on wihtout math floor.

function printSequentially(arr) {
    return new Promise((resolve, reject) => {
        let i = 0;
        let interval = setInterval(() => {
            if (i < arr.length) {
                console.log(arr[i]);
                i++;
            } else {
                clearInterval(interval);
                resolve();
            }
        }, Math.floor(Math.random() * 6)*1000); //math.floor(Math.random()*6) returns a random number between 0 and 6. eg: 0,1,2,3,4,5,6

    });
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printSequentially(arr).then(() => {
    console.log("Done");
}
).catch(err => {
    console.log(err);
}
)

//The following recursive code will cause a stack overflow if the array "somelist" is too large. How can you fix this and still retain the recursive pattern?

//largest array that can be used is 100000
var somelist = [];
for (let i = 0; i < 100000; i++) {
    somelist.push(i);
}


var nextItem = () => {
    var item = somelist.pop();
    if (item) {
        console.log(item);
        setTimeout(nextItem, 0);
    }
}

nextItem();






