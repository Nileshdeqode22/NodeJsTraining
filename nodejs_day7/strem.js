import fs from 'fs';
import http from 'http';
//create stream from file and pipe it to response
const server = http
  .createServer((req, res) => {
    const pipeReadstream = fs.createReadStream('./log.txt');
    pipeReadstream.setEncoding('utf8');
    const pipeWritestream = fs.createWriteStream('./log1.txt');
    pipeReadstream.pipe(pipeWritestream);
    //assert if the file is being read or written to the match the file
    res.end('done');
  })
  .listen(3000);
console.log('server is running on port 3000');

