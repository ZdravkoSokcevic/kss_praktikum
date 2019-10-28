const express= require('express');
const app= express();

const test= require('./controllers/test');
const userJson= require('./controllers/userJson');
const userDb= require('./controllers/userDb');

app.get('/test/bootstrap',(req,res)=> {
    test(req,res);
});

app.get('/userJson/userlist',(req,res)=> {
    userJson.userlist(req,res);
});
app.post('/userJson/adduser',(req,res)=> {
    userJson.adduser(req,res);
});
app.delete('userJson/deleteuser/:id',(req,res)=> {
    userJson.deleteuser(req,res);
});

app.get('/userDb',(req,res)=> {
    userDb.userlist(req,res);
});
app.post('/userDb',(req,res)=> {
    userDb.adduser(req,res)
});
app.delete('/userDb',(req,res)=> {
    userDb.deleteuser(req,res)
});

app.listen(3000);