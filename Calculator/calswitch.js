
            let readline = require('readline-sync');
            let result;
            let op;



        readline.question(" \n\n ********sWelcome to the world of Calculator********")
        


    for(;;){
        console.log("\n\nPlease Enter your choice what Operation do you want to perform ?:\n");
        op = parseInt(readline.question("1-Addition.\n2-Substraction.\n3-Multiplication.\n4-Division.\n5-Exit.\n\n"));

        if (op==5){
            readline.question("Thank You for using Calculator....")
            process.exit(1);

        }
        let number1 = parseInt(readline.question("\n\n Please enter a number:\n "));
        let number2 = parseInt(readline.question("\n\n Please enter another number:\n "));
            switch(op) {
                    case 1:
                        result = number1 + number2;
                        console.log(`\n Addition of ${number1} + ${number2} = ${result}`);
                        break;

                    case 2:
                        result = number1 - number2;
                        console.log(`\n Substraction of ${number1} - ${number2} = ${result}`);
                        break;

                    case 3:
                        result = number1 * number2;
                        console.log(`\n Multiplication of ${number1} * ${number2} = ${result}`);
                        break;


                    case 4:
                        if(number2===0)
                        {
                            console.log("OOps Divide by zero\n");

                        }else{
                            result = number1 / number2;
                            console.log(`\n Division of ${number1} / ${number2} = ${result}`);
                        }
                        break;
                    default:
                        console.log("\n Enter correct option \n");
                        break;
                        
                              
            }
            
           

    }
    




  


