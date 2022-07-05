const path=require('path');

const basename=path.basename(__filename);
console.log(basename);

 const extnsion=path.extname(__filename);
 console.log(extnsion);

const dirname=path.dirname('path.js');
console.log("dirname:",dirname);

const parse=path.parse(__filename);
console.log(parse);

const format=path.format(parse);
console.log(format);

const absoultePath=path.isAbsolute('/home/deqode');
console.log(absoultePath);
console.log(path.relative('/home/deqode','/home/deqode/nodejs/path.js'));



