const app=require('express')();
const bodyParser= require('body-parser');
const insertModel= require('./models/insert');
const selectModel= require('./models/read');
const updateModel= require('./models/update');
const deleteModel= require('./models/delete');
const dodajProizvod= require('./models/proizvod_insert');


app.use(bodyParser.urlencoded({extended:true}));
// app.use(app.bodyParser());
app.get('/data/insert',(req,res)=> {
    insertModel(req,res);
});

app.get('/data/all',(req,res)=> {
    selectModel(req,res);
});
app.get('/data/update',(req,res)=> {
    updateModel(req,res);
});
app.get('/data/delete',(req,res)=> {
    deleteModel(req,res);
});
app.post('/dodaj/proizvod',(req,res)=> {
    dodajProizvod(req,res);
});

app.listen(3000);