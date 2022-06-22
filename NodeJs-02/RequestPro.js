const requestPromise = require('request-promise');
const fs = require('fs');



//Get request http://dummy.restapiexample.com/api/v1/employee/1 and store in text file name timestamp employee1.txt using promise chaining
const Options = {
    url: 'https://dummy.restapiexample.com/api/v1/employee/1',
    //method: 'GET',
    method: 'GET',
    // headres are used to send data to the server 
    headers: {
        'User-Agent': 'request', //User-Agent is used to identify the client application
        'Content-Type': 'application/json' //Content-Type is used to specify the type of data being sent to the server
    }
}

requestPromise(Options)
    .then(function (body) {
        console.log(body);
        //write the response to a file named with the current timestamp
        fs.writeFileSync(`./output/${Date.now()}_employee1_promise.txt`, body, 'utf8');
    }
    )
    .catch(function (err) {
        console.error(err);
    }
    );


//get 'https://dummy.restapiexample.com/api/v1/employees' and store in text file name timestamp employee_create.txt


const Options1 = {
    url: 'https://dummy.restapiexample.com/api/v1/employees',
    //get method is used to fetch data from the server
    method: 'GET',
    //headers are used to send data to the server
    headers: {
        'User-Agent': 'request',//User-Agent is used to identify the client application
        'Content-Type': 'application/json' //Content-Type is used to specify the type of data being sent to the server
    }
}

// requestPromise(Options1) //using promise chaining to get the data
requestPromise(Options1)
    .then(function (body) {
        console.log(body);
        //write the response to a file named with the current timestamp
        fs.writeFileSync(`./output/${Date.now()}_employeealldata_promise.txt`, body, 'utf8');
    }
    )
    .catch(function (err) {
        console.error(err);
    }
    );


