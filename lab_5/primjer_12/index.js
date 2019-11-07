//      ● Napisati HTTP server koji je u stanju klijentima da vrati  datum zadnjeg pristupa i 
//      ●  datum zadnjeg modifikovanja tekstualnog fajla ukoliko je zahtjev korektan i postoji trazena datoteka,
//      ● u suprotnom poruku sa odgovarajucim kodom(400,404 ili 505)

const http= require('http');
const fs= require('fs');
const url= require('url');
const child_process= require('child_process');

const app= http.createServer((req,res)=> {
        let reqUrl= url.parse(req.url,true);
        let file= reqUrl.query.file;
      
        http.get('http://www.vtsnis.edu.rs',(response)=> {
            console.log(response);
            res.write(JSON.stringify(response.headers.server));
            res.end();
        });
            // fs.exists(file,fileExists=> {
            //     if( !fileExists ) {
            //         res.statusCode(404);
            //         res.end(JSON.stringify("File not exists"));
            //     }else {
            //         fs.stat(file,(err,stats)=> {
            //             console.log(file);
            //             if( err ) {
            //                 console.log(err);
            //                 res.statusCode(400);
            //                 res.end(JSON.stringify("Cannot read file"));
            //             } else {
            //                 let response='File je modifikovan '+stats.mtime.toLocaleDateString()+"zadnji put \n"+"Vrijeme zadnjeg pristupa file-u je "+stats.atime.toLocaleDateString()+"\n";
            //                 res.end(JSON.stringify(response));
            //             }
            //         })
            //     }
            // });
});

app.listen(3000);