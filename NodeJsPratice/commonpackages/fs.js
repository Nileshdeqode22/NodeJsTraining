const fs=require('fs');

fs.writeFileSync("log.txt","This is a test file");

fs.appendFileSync("log.txt","This is a test file");

fs.readFile("log.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        }
        else{
            console.log(data.toString());
        }
}
);

fs.unlink("log.txt",(err)=>{
    if(err){
        console.log(err);
        }
        else{
            console.log("file deleted");
        }
}
);


fs.mkdir("log",(err)=>{

    if(err){
        console.log(err);
        }
        else{
            console.log("directory created");
        }
}
);


fs.rmdir("log",(err)=>{
    
        if(err){
            console.log(err);
            }
            else{
                console.log("directory deleted");
            }
});

//sync methods
fs.writeFileSync("log.txt","This is a test file");

fs.appendFileSync("log.txt","This is a test file");

fs.readFileSync("log.txt","utf-8");


fs.unlinkSync("log.txt");


//write stream and read stream
const ws=fs.createWriteStream("log.txt");
ws.write("This is a test file");
ws.end();


const rs=fs.createReadStream("log.txt");
rs.pipe(process.stdout);






