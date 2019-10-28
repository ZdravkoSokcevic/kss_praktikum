const express= require('express');
const app= express();

var path= require('path');
app.get('/',(req,res,next)=> {
    // res.send('Choose the zad number!!!');
    res.sendFile(__dirname+'/zad.html');
});

app.get('/zad1',(req,res,)=> {
    var s=req.query.s;
    if(s==undefined) {
        let p= path.join(__dirname,'Views/','9.html');
        res.sendFile(p);
    }
    else if(s=='slika1') {
        var p= path.join(__dirname,'images/','smile1.jpeg');
        res.sendFile(p);
    }
    else if(s=='slika2') {
        let p= path.join(__dirname,'images/','smile2.jpeg');
        res.sendFile(p);
    }
    else if(s=='slika3') {
        let p=path.join(__dirname,'images/','smile3.jpeg');
        res.sendFile(p);
    }
});
app.listen(3000);