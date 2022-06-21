//Create a program to fetch content from the API's provided on the following link and store its response in different files in the filesystem.
//http://dummy.restapiexample.com/

const request = require('request');
const fs = require('fs');

//Create a program to fetch content from the API's provided on the following link and store its response in different files in the filesystem.

//Get request http://dummy.restapiexample.com/api/v1/employees and store in text file name timestamp employee.txt

request.get('https://dummy.restapiexample.com/api/v1/employees', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        //write the response to a file named with the current timestamp
        fs.writeFileSync(`${Date.now()}_employee.txt`, body, function (err) {
            if (err) throw err;
            console.log('Saved!');
        }
        );  
    }else{
        console.error("API Error: " + error);
    }
}
);


//Get request http://dummy.restapiexample.com/api/v1/employees/1 and store in text file name timestamp employee1.txt

request.get('https://dummy.restapiexample.com/api/v1/employee/1', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        fs.writeFileSync(`${Date.now()}_employee1.txt`, body, function (err) {
            if (err) throw err;
            console.log('Saved!');
        }
        );
    }else{
        console.error("API Error: " + error);
    }
}
);






    