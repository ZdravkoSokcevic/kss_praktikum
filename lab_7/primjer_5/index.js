const express= require('express');
const app= express();

app.set('view engine','jade');
app.use(express.static('views'));
app.get('/',(req,res)=> {
    res.render('layout');
});

app.listen(3000);