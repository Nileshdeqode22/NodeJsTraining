


let readline = require('readline-sync');
let result
let decision =false


do{


  let op = readline.question('Enter operator:');

  let number1 = parseInt(readline.question('Please enter a number: '));
  let number2 = parseInt(readline.question('Please enter another number: '));



  switch(op) {
      case '+':
          result = number1 + number2;
          console.log(`${number1} + ${number2} = ${result}`);
          break;

      case '-':
          result = number1 - number2;
          console.log(`${number1} - ${number2} = ${result}`);
          break;

      case '*':
          result = number1 * number2;
          console.log(`${number1} * ${number2} = ${result}`);
          break;

      case '/':
          result = number1 / number2;
          console.log(`${number1} / ${number2} = ${result}`);
          break;

      default:
          console.log('Invalid operator');
          break;
        
  }

 
}while(decision!=true)



  


