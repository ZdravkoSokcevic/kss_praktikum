const express= require('express');
const app= express();
const path=require('path');
const url= require('url');

app.use('/zadatak3/:params',(req,res)=> {
    req.path=req.url='/hi/'+req.param('params');
    require('../primjer_3/index')(req,res);
});
app.use('/:zadatak',(req,res,next)=> {
    console.log(req.param('zadatak'));
    switch(req.param('zadatak'))
    {
        case 'zadatak2':
        {
            zadatak2(req,res);
        };break;
        // case 'zadatak3': 
        // {
        //     zadatak3(req,res);
        // };break;
    }
    
});
let zadatak2=(req,res)=>{
    req.path=req.url='/quotes';
    require('../primjer_2/index')(req,res);
}
// let zadatak3=(req,res)=> {
//     let quote=
//     req.path=req.url='/hi/'
// }

app.listen(8080);