const jobs = require('./jobs.json');
const technologies=require('./technologies.json')
const fs = require('fs');

for(let info of jobs){
	//splitt string into array
	const desc=info.description.split(" ");
	const matchData=technologies.filter((tech) => desc.includes(tech))
	info.tags=matchData
	info.processing_timestamp=Date.now()	
	
}
fs.writeFileSync("./sample_expected_output.json", JSON.stringify(jobs,null,4), 'utf8', function (err) {
	if (err) {
			return console.log(err);
	} 
			
				
}); 







