const express= require('express');
const app= express();

app.use((req,res,next)=> {
    console.log("Time"+Date.now());
    next();
});
app.use('/',(req,res,next)=> {
    console.log("Request: "+req.method);
    next();
});
app.use('/',(req,res,next)=> {
    console.log("Treci poziv: ");
    // res.end("KRAJ");
    next();
});
let router= require('../primjer_7(express_router)/index');
app.use('/birds',router);
app.listen(4000);