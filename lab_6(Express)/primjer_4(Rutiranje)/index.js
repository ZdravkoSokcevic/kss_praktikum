const express= require('express');
const app= express();

app.get('/',(req,res)=> {
    res.send('Hello world');
});
app.post('/',(req,res)=> {
    res.send('POST request to the homepage');
});
app.all('/secret',(req,res,next)=> {
    console.log('Access to secret section... ');
    next();
});
app.get('/secret',(req,res)=> {
    res.send('Secret area accessed!');
});
app.get('/user/:id',(req,res,next)=> {
    if(req.param.length==0)
        return next('route');
    else next();
},(req,res,next)=> {
    res.send("Request id: ",req.params.id);
    next();
});
app.get('user/:id',(req,res)=> {
    res.send("Special");
});

app.listen(3000);