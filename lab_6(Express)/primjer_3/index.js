const express= require('../primjer_2/node_modules/express');
const app=express();

let quotes= {
    'Einstein':'Life is like riding a bicycle.To keep your balance you must keep moving',
    'Berners-Lee':'The Web does not just connect maschine,it connects people'
}

// app.get('/quotes/:name',(req,res)=> {
//     let name=req.params.name;
//     res.end(JSON.stringify('Quote is: '+quotes[name]));
// });

app.get('/hi/:param1',(req,res)=> {
    res.write("Params:  "+JSON.stringify(req.params));
    res.end("Query  "+JSON.stringify(req.query));
});

// app.listen(3000);
module.exports=app;