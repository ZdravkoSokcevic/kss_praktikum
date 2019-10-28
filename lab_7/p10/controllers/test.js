const exress= require('express');

let test=(req,res)=>{
    console.log('test');
    res.end('test');
}

module.exports=test;
