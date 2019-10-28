// Primjer web servera sa obradom gresaka.
// Server se moze testirati putem curl

// curl -method POST http://localhost:8080/index
// curl http://127.0.0.1:8080/index
const appPort=8080;
const url= require('url');

const http= require('http');
let app=http.createServer((req,res)=> {
    var pathname=url.parse(req.url).pathname;
    if( req.method!='GET') {
        res.writeHead(405,{'Content-Type':'text/html'});
        res.end();
    }else {
        require('fs').readFile(pathname.substr(1),(err,data)=> {
            console.log('tu je '+data);
            if ( err ) {
                console.log(err);
                res.writeHead(404,{'Content-Type':'text/html'});
            } else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(JSON.stringify(data.toString()));
            }
        res.end();
        });
    }
}).listen(appPort);

console.log(`Server running at 127.0.0.1:${appPort}/`);

