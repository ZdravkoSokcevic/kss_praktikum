const http= require('http');
const fs= require('fs');
const url= require('url');

var ind=0;
var dat=new Date();

fs.writeFile('Vjezba8.txt',
                            "\n\n\n Application startd" +
                             dat + "\n",
                             err=>{
                                if(err)
                                    console.log(err);    
                             }
);

var server=http.createServer((req,res)=> {
    let o=url.parse(req.url,true);
    res.writeHead(200);
    let ime=o.query.ime;
    let prezime=o.query.prezime;
    let indeks=o.query.indeks;
    let str= indeks + ' '+ ime+' '+prezime+' '+ indeks+dat+'\n';
    console.log(str);

    if(ime==undefined || prezime==undefined || indeks==undefined) {
        res.write("Niste uspjesno upisani \n");
        readFile(res);
    }else {
        indeks++;
        res.write('Uspjesno ste upisani \n');
        readFile(res);
    }
});
server.listen(8080);

let readFile=res=> {
    fs.readFile('Vjezba8.txt',(err,data)=> {
        if(err)
            console.log(err);
        res.end(JSON.stringify(data.toString()));
    });
}