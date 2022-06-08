const config = require('./jobs.json');
const tech=require('./technologies.json')
const object2 = tech.reduce((acc, nxt) => {
    let timestamp=Date.now()

	const jobsObjs = config.map(obj => ({...obj, "tags":nxt,"processing_timestamp":timestamp}));
	acc.push(...jobsObjs);
	return acc;
}, []);




