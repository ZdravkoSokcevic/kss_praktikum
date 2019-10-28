const app= require('express')();
const conn=require('./connection/conn');

app.get('/proizvodi',(req,res)=> {
    conn.connect(err=>{
        if(err){
            res.status(500);
            return res.end(err.message);
        }

        let sql='SELECT id,name FROM proizvodi;';
        conn.query(sql,(err,result)=> {
            if(err) {
                res.statusCode=500;
                return res.end(err.message);
            }
            res.status(200);
            result.forEach(row => {
                res.write(row.name+'<br>');
            });
            return res.end();
        })
            
    });
});
app.post('/dodaj/priozvod',(req,res)=> {
    
});

app.listen(3000);