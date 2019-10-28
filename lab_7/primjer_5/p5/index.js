const express= require('express');
const app= express();
const path=require('path');

const userRender= require('./controllers/list_user');

app.set('view engine','jade');
app.set('view engine','ejs');

app.use('/stylesheet',express.static(__dirname+'/stylesheet'));
app.use('/scripts',express.static(__dirname+'/scripts'));
app.use(express.static('views'));
app.get('/',(req,res)=> {
    res.render('layout');
});
app.get('/user',(req,res)=> {
    res.render('user');
});
app.get('/user/add',(req,res)=> {
    res.render('add_user');
});
app.get('/user/list',(req,res)=> {
    userRender(req,res);
});

app.listen(3000);