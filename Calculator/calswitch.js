//calculator using switch statement and while asking for the operation to be performed in nodejs
let readline = require('readline-sync');
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
    switch(choice)
    {
        case '1':
            Addition=parseInt(num1)+parseInt(num2);
            console.log("Addition of two numbers is\n"+Addition);
            break;
        case '2':
            Subtraction=parseInt(num1)-parseInt(num2);
            console.log("Subtraction of two numbers is \n "+Subtraction);
            break;
        case '3':
            Multiplication=parseInt(num1)*parseInt(num2);
            console.log("Multiplication of two numbers is \n "+Multiplication);
            break;
        case '4':
            Division=parseInt(num1)/parseInt(num2);
            console.log("Division of two numbers is \n "+Division);   
            break;

        default:
            console.log("Invalid choice" );
            break;
    }

    c=readline.question("***** Do you want to continue?(y/n) *****\n");

    if(c==='n')
    {
        console.log("****** Thank you for using the calculator ******");
    }

    
}


//output
//Enter the choice
//1.Addition
//2.Subtraction
//3.Multiplication
//4.Division
//5.Exit
//1
//Enter the first number
//10
//Enter the second number
//20
//Addition of two numbers is 30

