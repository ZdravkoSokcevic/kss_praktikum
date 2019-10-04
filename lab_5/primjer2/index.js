const http= require('http');
const fs= require('fs');

let app=http.createServer((req,res)=> {
    // primjer 3 vracen header content-type
    res.writeHead(200,{'Content-Type':'text/html'});
    // primjer 4 preko stream
    let file=fs.createReadStream('index.html');
    file.pipe(res);
    // fs.readFile('index.html',(err,data)=> {
    //     res.end(data);
    // });

});

app.listen(3000);