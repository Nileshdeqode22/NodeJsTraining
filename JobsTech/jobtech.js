const config = require('./jobs.json');
console.log(config);

const tech=require('./technologies.json')
console.log(tech)

const fs = require('fs');

fs.readFile('./jobs.json', 'utf8', (error, jobsData) => {
    if(error){
       console.log(error);
       return;
    }

    console.log(JSON.parse(jobsData))

    console.log("jobsData:",jobsData)

    for (const key in jobsData){
        console.log(`${key}:${jobsData[key]}`)
    }
     
   
})



fs.readFile('./technologies.json', 'utf8', (error, technologiesData) => {
    if(error){
       console.log(error);
       return;
    }

    console.log(JSON.parse(technologiesData))
    console.log("technologiesData=",technologiesData)

    //jsonToMap(technologiesData)
    
})


// Get the current timestamp
//now.getTime();

// function jsonToMap(jsonString)  {

//     console.log("jsonstring",jsonString)
//     let jsonObject = JSON.parse(jsonString);
//     let dataObject = jsonObject.data;

//     let dataMap = new Map(Object.entries(dataObject));
     
//     var resultMap = new Map();
//     for (const key of dataMap.keys())  {
//         console.log(key);
//         let keyMap = new Map(Object.entries(dataMap.get(key)));
//         resultMap.set(key, keyMap);
//     }


//     console.log("done!");
//     return resultMap;
// }





// const map=new Map();
// map.set( "company", "Deqode");
// map.set("type", "Full-Time");
// map.set("description","")

// console.log(map)