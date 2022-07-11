import {
  writeFileSync,
  appendFileSync,
  readFile,
  unlink,
  mkdir,
  rmdir,
  readFileSync,
  unlinkSync,
  createWriteStream,
  createReadStream,
} from 'fs';

writeFileSync('log.txt', 'This is a test file');

appendFileSync('log.txt', 'This is a test file');

readFile('log.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

unlink('log.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file deleted');
  }
});

mkdir('log', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('directory created');
  }
});

rmdir('log', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('directory deleted');
  }
});

// sync methods
writeFileSync('log.txt', 'This is a test file');

appendFileSync('log.txt', 'This is a test file');

readFileSync('log.txt', 'utf-8');

unlinkSync('log.txt');

// write stream and read stream
const ws = createWriteStream('log.txt');
ws.write('This is a test file');
ws.end();

const rs = createReadStream('log.txt');
rs.pipe(process.stdout);
