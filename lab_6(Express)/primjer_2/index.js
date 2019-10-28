const express= require('express');
const app=express();

var quotes={
    'Einstein':'Life is like riding a bicycle.To keep your balance you must keep moving',
    'Berners-Lee':'The Web does not just connect maschine,it connects people',
    'Crockford':'The good thing about reinverting the wheel is that you can get a round one ',
    'Hofstadter':'Which statement seems more true? (1) I have a brain. (2) I am a brain.'
}
app.get('/',(req,res)=> {
    res.end("Tu sii");
});
app.get('/quotes',(req,res)=> {
    let name= req.query.name;
    let quote=quotes[name];
    console.log(req.query);
    res.end(JSON.stringify(quotes[name]));
    console.log(name,quotes[name])
});

// app.listen(3000);
module.exports=app;

// Poziva se http://localhost:3000/quotes?name=Einstein