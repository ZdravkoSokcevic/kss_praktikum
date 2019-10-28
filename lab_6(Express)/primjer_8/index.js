const fs= require('fs');
const express= require('express');
const app= express();
app.use((err,req,res,next)=> {
    console.log('ERROR CAUGHT!!!!!!');
    console.log(err.stack);
    res.status(500).send('Something broke');
});

app.get('/file',(req,res,next)=> {
    fs.readFile('Vjezba8.txt',{flag:'a+'},(err,data)=> {
        if(err) {
            console.log('ERROR Thrown');
            return next(err);
        } else {
            return next(data);
        }
    });
});


app.listen(3000);