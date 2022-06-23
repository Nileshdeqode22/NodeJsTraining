const http=require('http');
//createServer is a method of http module
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});//writeHead is a method of response object
    res.end('<h1>Hello World</h1>');//end is a method of response object
}
);
server.listen(3000);
console.log('Server is running on port 3000');


