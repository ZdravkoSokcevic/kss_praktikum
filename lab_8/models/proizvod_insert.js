const conn= require('../connection/conn')();
const app= require('express')();
const body_parser= require('body-parser');
app.use(body_parser.urlencoded({extended:true}));
// app.use(bod)
let insert=(req,res)=> {
    console.log(req.body);
    conn.connect(err=> {
        if(err) {
            throw err;
            console.log(err.message);
        }
        let query="INSERT INTO proizvodi (ime,cijena,kolicina,dobavljac_id,kolicina_id) VALUES(";
        query+="'"+req.body.ime+"',";
        query+="'"+req.body.cijena+"',";
        query+="'"+req.body.kolicina+"',";
        query+="'"+req.body.dobavljac+"',";
        query+="'"+req.body.kolicina_id+"'";
        query+=");";
        conn.query(query,(err,data)=> {
            if(err) {
                res.status(500);
                return res.end(err.message);
            } 
            res.status(200);
            return res.end('Proizvod je uspjesno dodat pod brojem '+data.insertId);
        });
    })
}

module.exports=insert;