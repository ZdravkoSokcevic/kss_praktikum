//  Dobavljanje slike
require('http').createServer((req,res)=> {
    const fs= require('fs');
    res.writeHead('200',{'Content-Type':'image/jpeg'});
    let stream= fs.createReadStream('smile.jpeg');
    stream.pipe(res);
}).listen(3000);