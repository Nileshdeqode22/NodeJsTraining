const config = require('./jobs.json');
const tech=require('./technologies.json')

const fs = require('fs');

	console.log("conifg ",config.length)
	const object2 = tech.reduce((acc, nxt) => {
		// for (let i=0;i<config[i].description.length;i++){
				let arrayDesc=config[2].description.split(" ")

				
				let timestamp=Date.now()
				const jobsObjs = config.map(obj => ({...obj, "tags":nxt,"processing_timestamp":timestamp}));
				acc.push(...jobsObjs);
			
			fs.writeFileSync("./sample_expected_output.json", JSON.stringify(acc,null,30), 'utf8', function (err) {
				if (err) {
					return console.log(err);
				}
			
				
			}); 
			console.log(acc)
			return acc;
		//}
	}, []);






