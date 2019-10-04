let fs= require('fs');

fs.readFile('input.txt',(err,data)=>{
    (err)?
        console.log(err.stack):console.log(data.toString());
});
console.log('Program ends');    