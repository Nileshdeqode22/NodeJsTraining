// create get api and set api with using http
const http = require('http');
const hostname= 'localhost';
const port=3000;
const fs=require('fs');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    fs.readFile('./empdata.json', (err, data) => {
        if (err) throw err;
        res.end(data);
    }
    );
}
);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}
);






