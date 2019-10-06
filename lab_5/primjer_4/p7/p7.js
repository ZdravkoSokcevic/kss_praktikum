// http://http://localhost:8080/?ime=zdravko&prezime=sokcevic&indeks=rer16_17


const http= require('http');
const fs= require('fs');
const url= require('url');
const childProcess=require('child_process');

var ind=0;
var dat=new Date();

// fs.writeFile('Vjezba8.txt',
//                             "\n\n\n Application startd" +
//                              dat + "\n",
//                              err=>{
//                                 if(err)
//                                     console.log(err);    
//                              }
// );

var server=http.createServer((req,res)=> {
    // console.log(req.param);
    let o=url.parse(req.url,true);
    
    // console.log(o);
    let path=o.path.split('/');
    // console.log(o.query.prototype.hasOwnProperty('students'));
    switch(path[1])
    {
        // here we are shure that url contains student key
        case 'students': 
        {
            console.log("tu je");
            // res.end("Postoji");
            studentActions(req).then(result=> {
               makeResponseArrayObjects(result).then(parsedData=> {
                res.setHeader('Access-Control-Allow-Origin','*');
                res.write(JSON.stringify(parsedData));
               res.end();
                console.log(`Parsed Data: ${JSON.stringify(parsedData)}`);
               });
            });
        };break;
        case '?ime':
        {
            console.log("ovdje je");
            writeStudentIfNotExists(req).then(result=> {
                console.log(`Dosao u response \n ${result}`);
                res.end(JSON.stringify(result));
            });
            // console.log("A sad je ovdje");
        };break;
        default: {
            // console.log(path[1]);
        }
    }
    // console.log(o.query.prototype.hasOwnProperty('students'));
    // res.end("dobro je");
    
});
server.listen(8080);
let readFile=()=> {
    return new Promise(res=> {
        fs.readFile('Vjezba8.txt',(err,data)=> {
            if(err)
                console.log(err);
            res(data.toString());
        });
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
                index: newData[3]
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
                index: existsData[3]
            }
            // console.log(`Old data ${JSON.stringify(compareData)}, \n New data ${JSON.stringify(newData)}`);
            // console.log(JSON.stringify(compareData)===JSON.stringify(newData));
            if(JSON.stringify(compareData)===JSON.stringify(newData))
                res(true);
        })
        res(false);
    });
}

let deleteStudent=new_data=> {
  return new Promise((resolve,rejection)=> {
    fs.readFile('Vjezba8.txt',(err,data)=>{
        // console.log(`Data: ${data}`);
        let writeToFile=fs.createWriteStream('Vjezba8.txt');
        let oldData= data.toString().split('\n');
        let newArrayOfData=[];
        oldData.forEach(row=> {
            let existsData=row.split(' ');
            let oldObject={
                name: existsData[1],
                last_name: existsData[2],
                index: existsData[3]
            }
            let newObject={
                name:new_data[0],
                last_name: new_data[1],
                index: new_data[2]
            }
            if(JSON.stringify(oldObject)!==JSON.stringify(newObject)) {
                newArrayOfData.push(oldObject);
                if(oldObject.name !== undefined && oldObject.last_name !==undefined && oldObject.index===undefined) {
                    let str= existsData[0]+ ' ' + oldObject.name+' '+oldObject.last_name+' '+oldObject.index;
                    writeToFile.write(str);
                }
                 
            }
               
        });
        // fs.writeFileSync('Vjezba8.txt',newArrayOfData.join('\n').toString());
        resolve(true);
    });
  });
}

let findByInd= ind =>{
    return new Promise(resolve=> {
        readFile().then(result=> {
            let rows=result.split('\n');
            rows.forEach(row=> {
                let splitted=row.split(' ');
                if(splitted[0]===ind)
                    res(row);
            });
        });
    });
}

let studentActions= (req)=> {
    return new Promise(resolve=> {
        let o=url.parse(req.url,true);
        let pathArray=o.path.split('/');
            if(pathArray[2]=='all') {
                console.log("Svi studenti");
                readFile().then(result=> {
                    if(result)
                        resolve(result);
                    else resolve("File is empty");
                });
            }
            else if(pathArray[2]=='delete') {
                let id=pathArray[3];
                findByInd(id).then(student=> {
                    if(student)
                        deleteStudent.then(res=> {
                            resolve('Deleted');
                        });
                    else resolve('Cannot delete');
                });
            }
    });
  
    
}

let writeStudentIfNotExists= (req)=> {
    return new Promise((res,rej)=> {
        let o=url.parse(req.url,true);
        let osoba={
            ime:o.query.ime,
            prezime:o.query.prezime,
            indeks:o.query.indeks
        }
        let str= ind + ' '+ osoba.ime+' '+osoba.prezime+' '+ osoba.indeks+dat+'\n';
        // console.log(str);
    
        if(osoba.ime==undefined || osoba.prezime==undefined || osoba.indeks==undefined) {
            readFile().then(result=> {
                res(result);
            });
            res("Niste uspjesno upisani \n");
        }else {
            ind++;
            // exists(str).then(res=> console.log(res));
            exists(str).then(ifExists=> {
                if(ifExists) {
                    deleteStudent(str).then(result=> {
                        if(result)
                            res("Already added and deleted");
                        else res("Error during delete");
                    });
                }
                 
                 else {
                    fs.appendFile('Vjezba8.txt',str,(err,data)=>{
                        if(err)
                            console.log(err);
                        /// Fajl se brise svaki put kada se upise u njega
                        //childProcess.exec('rm -r Vjezba8.txt');
                        readFile().then(result=> {
                            res(result);
                        });
                        res(osoba);
                   })
                        // readFile(res);
                 }
            })
    
        }
    });
    
}
let makeResponseArrayObjects=data=> {
   return new Promise(resolve=> {
    let array=data.split('\n');
    let responseArray=[];
    array.forEach(row=> {
        let singleData=row.split(' ');
        let singleObject={
            name:singleData[2],
            last_name:singleData[3],
            indeks:singleData[4],
            ind:singleData[0]
        }
        console.log(singleObject);
        if(singleObject.name!=='' && singleObject.name!=='startdSun' && singleObject.name!==undefined)
            responseArray.push(singleObject);
    });
    resolve(responseArray);
   });
}