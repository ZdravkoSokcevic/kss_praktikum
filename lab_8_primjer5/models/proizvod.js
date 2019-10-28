const conn= require('../connection/conn')();

let proizvod= {
    dodaj:(req,res)=> {
        let proizvod= {
            ime:                        req.body.ime,
            cijena :                req.body.cijena,
            kolicina:            req.body.kolicina,
            dobavljac_id:   req.body.dobavljac_id,
            kategorija_id: req.body.kategorija_id
        }
        let query= "INSERT INTO proizvodi (ime,cijena,kolicina,dobavljac_id,kategorija_id) VALUES (";
        query+="'"+proizvod.ime+"',";
        query+="'"+proizvod.cijena+"',";
        query+="'"+proizvod.kolicina+"',";
        query+="'"+proizvod.dobavljac_id+"',";
        query+="'"+proizvod.kategorija_id+"'";
        query+=");";
        conn.query(query,(err,success)=> {
            if(err) throw err;
            res.end("Successifully added new product with id: "+success.insertId);
        });
    },
    all:res=> {
        let query= "SELECT * FROM proizvodi;";
        conn.query(query,(err,data)=> {
            if(err){
                res.status(404);
                res.end('Not found');
            }
            console.log(JSON.stringify(data));
            res.end(JSON.stringify(data));
        });
    },
    findById:(req,res)=> {
        let id=req.params.id;
        if(id== undefined){
            res.status(404);
            res.end("Must be valid id!");
        }
        let query=`SELECT * FROM proizvodi WHERE id=${id};`;
        conn.query(query,(err,data)=> {
            if(err) {
                res.status(404);
                res.end('Not found');
            }
            res.status(200);
            res.end(JSON.stringify(data));
        }); 
    },
    delete:(req,res)=> {
        let id= req.params.id;
        if(id==undefined) {
            res.status(404);
            res.end('Not found');
        }
        let query= `DELETE FROM proizvodi WHERE id=${id}`;
        conn.query(query,(err,success)=> {
            if(err) {
                res.status(404);
                res.end('Not found');
            }
            res.status(200);
            res.end('Product successifully deleted from db!');
        });
    }
}

module.exports= proizvod;