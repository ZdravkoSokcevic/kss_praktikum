const express= require('express');
const app= express();

app.set('view engine','jade');
app.use(express.static('views'));
app.get('/',(req,res)=> {
    res.render('primjer_4');
});

app.listen(3000);