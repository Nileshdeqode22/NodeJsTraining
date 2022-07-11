const path = require('path');

const basename = path.basename(__filename);
console.log(basename);

const extension = path.extname(__filename);
console.log(extension);

const dirname = path.dirname('path.js');
console.log('dirname:', dirname);

const parse = path.parse(__filename);
console.log(parse);

const format = path.format(parse);
console.log(format);

const newLocal = '/home/deqode';
const absolutePath = path.isAbsolute(newLocal);
console.log(absolutePath);
console.log(path.relative('/home/deqode', '/home/deqode/nodejs/path.js'));
