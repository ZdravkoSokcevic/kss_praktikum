const express= require('express');
const app= express();
const path= require('path');

app.set('views',path.join(__dirname,'views'));

var quotes={
    'Einstein':'Life is like riding a bicycle.To keep your balance you must keep moving',
    'Berners-Lee':'The Web does not just connect maschine,it connects people',
    'Crockford':'The good thing about reinverting the wheel is that you can get a round one ',
    'Hofstadter':'Which statement seems more true? (1) I have a brain. (2) I am a brain.'
}

app.get('/quotes',(req,res,next)=> {
    let quote=quotes[req.query.name];
    res.locals={
        home: req.query.name,
        quote: quote
    }
    res.render('quote.ejs',{res:res.locals});
});

app.get('/allquotes',(req,res,next)=> {
    let allQuotes=quotes;
    let selected={
        selected: req.query.name,
        quote: quotes[req.query.name]
    }
    let quoteArray=[];
    for(let x in quotes)
    {
        let data={
            author: x,
            quote: quotes[x]
        }
        quoteArray.push(data);
    }
    let responseObj={
        current:selected,
        all:quoteArray
    }
    res.render('citat.ejs',{data:responseObj});
});

app.listen(3000);
