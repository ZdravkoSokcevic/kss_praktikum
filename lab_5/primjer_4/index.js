var server=http.createServer((req,res)=> {
    let o=url.parse(req.url,true);
    // console.log(o.query);
    res.writeHead(200);
    

// http://http://localhost:8080/?ime=zdravko&prezime=sokcevic&indeks=rer16_17


const http= require('http');
const fs= require('fs');
const url= require('url');
const childProcess=require('child_process');

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
    // console.log(o.query);
    res.writeHead(200);
    let osoba={
        ime:o.query.ime,
        prezime:o.query.prezime,
        indeks:o.query.indeks
    }
    let str= ind + ' '+ osoba.ime+' '+osoba.prezime+' '+ osoba.indeks+dat+'\n';
    // console.log(str);

    if(osoba.ime==undefined || osoba.prezime==undefined || osoba.indeks==undefined) {
        res.write("Niste uspjesno upisani \n");
        readFile(res);
    }else {
        ind++;
        exists(str).then(ifExists=> {
            if(ifExists)
             res.end(JSON.stringify("Already added"));
             else {
                fs.appendFile('Vjezba8.txt',str,(err,data)=>{
                    if(err)
                        console.log(err);
                    /// Fajl se brise svaki put kada se upise u njega
                    //childProcess.exec('rm -r Vjezba8.txt');
                    res.write(JSON.stringify(osoba));
                    readFile(res);
               })
                    // readFile(res);
             }
        })

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
let exists=new_data=>{
    return new Promise((res,rej)=> {
        fs.readFile('Vjezba8.txt',(err,data)=> {
            let columns=data.toString().split('\n');
            let newData=new_data.toString().split(' ');
            let newColumn={
                name: newData[1],
                last_name: newData[2],
                index: newData[0]
            }
           checkAllData(newColumn,columns).then(result=> {
            if(result)
                res(true);
            else {
                res(false);
            }
           });
        });
    });
    
}

let checkAllData=(newData,oldData) => {
    return new Promise((res,rej)=> {
        oldData.forEach(row=> {
            let existsData= row.toString().split(' ');
            let compareData={
                name: existsData[1],
                last_name: existsData[2],
                index: existsData[0]
            }
            if(JSON.stringify(compareData)===JSON.stringify(newData))
                res(true);
        })
        res(false);
    });
}