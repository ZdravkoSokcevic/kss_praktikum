const express= require('express');
const app= express();
const bodyParser= require('body-parser');

const router= require('./routing/route');
const proizvod=require('./models/proizvod');

app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);

app.listen(3000);