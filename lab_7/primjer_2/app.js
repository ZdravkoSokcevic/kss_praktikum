const app= require('express')();
app.set('view engine','ejs');
let zad=require('./routes/index');
app.use('/zad',zad);
app.listen(3000);