let readline = require('readline-sync');
//calculator using if else which take input from user
let choice,num1,num2;
let Addition,Subtraction,Multiplication,Division;
let c='y';
while(c==='y')
{
    console.log("*****************************************************************************************");
    console.log("***** welcome to the calculator *****");
    console.log("*****************************************************************************************");
    choice=readline.question('Enter the choice of operation to be performed\n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division\n');
    console.log("*****************************************************************************************");
    num1=readline.question("Enter the first number\n");
    num2=readline.question("Enter the second number\n");
    console.log("*****************************************************************************************");
    if(choice==='1')

    {
        Addition=parseInt(num1)+parseInt(num2);
        console.log("Addition of two numbers is\n"+Addition);
    }
    else if(choice==='2')

    {
        Subtraction=parseInt(num1)-parseInt(num2);
        console.log("Subtraction of two numbers is \n "+Subtraction);
    }
    else if(choice==='3')
      
      {
          Multiplication=parseInt(num1)*parseInt(num2);
          console.log("Multiplication of two numbers is \n "+Multiplication);
      }
    else if(choice==='4')
      
      
      {
          Division=parseInt(num1)/parseInt(num2);
          console.log("Division of two numbers is \n "+Division);   
      }
    else
    {
        console.log("Invalid choice" );
    }
    c=readline.question("***** Do you want to continue?(y/n) *****\n");
    if(c==='n')
    {
        console.log("****** Thank you for using the calculator ******");
    }
}
