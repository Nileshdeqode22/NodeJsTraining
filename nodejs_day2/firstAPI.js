const request=require('request');
const fs = require('fs');

//Get request http://dummy.restapiexample.com/api/v1/employees and store in text file name timestamp employee.txt
const options={
    url:'https://dummy.restapiexample.com/api/v1/employees',
    method:'GET',
    headers:{  
        'User-Agent':'request',
        'Content-Type':'application/json'

    }
}
request(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        fs.writeFileSync(`./output/${Date.now()}_employeealldata.txt`, body, 'utf8');
    } else {
        console.log('error');
    }
}
);

//get request http://dummy.restapiexample.com/api/v1/employee/1 and store in text file name timestamp employee1.txt
const option = {
    url: 'https://dummy.restapiexample.com/api/v1/employee/1',
    method: 'GET',
    headers: {
        'User-Agent':'request',
        'Content-Type': 'application/json'
    }
}
request(option, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        //write the response to a file named with the current timestamp
        fs.writeFileSync(`./output/${Date.now()}_employee1.txt`, body, 'utf8');
    } else {
        console.error( error);
    }
}
);












    