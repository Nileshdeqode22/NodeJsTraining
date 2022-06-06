let readline = require('readline-sync');

let Calculation = function(num1, num2, op) {
  this.x = parseInt(num1);
  this.y = parseInt(num2);
  this.op = op;

  this.result = function() {
    let x = this.x;
    let y = this.y;
    let op = this.op;

    if (op === "+") {
      let result = x + y;
    } else if (op === "-") {
      let result = x - y;
    } else if (op === "/") {
      let result = x / y;
    } else if (op === "*") {
      let result = x * y;
    } else if (op === "%") {
      let result = x % y;
    } else {
      let result = "Error!"
    }

    console.log("Result: " + result);
  };
}

let num1 = readline.question("Please enter a number: ");
let num2 = readline.question("Please enter another number: ");
let op = readline.question("Please enter an operator: ");

let calc = new Calculation(num1, num2, op);

calc.result();