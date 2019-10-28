const express= require('express');
const app=express();
var options={
    dotfiles: 'ignore',
    etag: 'false',
    extensions: ['htm','html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: (res,path,stat)=> {
        res.set('x-timestamp',Date.now());
    }
}
app.use(express.static('Files'));
app.use(express.static('images',options));

app.listen(3000);