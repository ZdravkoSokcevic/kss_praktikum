const conn= require('../connection/conn')();

const Supplier= {
    insert:(req,res)=> {
        let data= {
            ime:                             req.body.ime,
            kontakt_osoba:      req.body.kontakt_osoba,
            email:                         req.body.email
        }
        let query="INSERT INTO dobavljac(ime,kontakt_osoba,email) VALUES (";
        query+=`'${data.ime}','${data.kontakt_osoba}','${data.email}');`;
        conn.query(query,(err,success)=> {
            if(err) {
                res.status(500);
                res.end('Error occurred');
            }
            res.status(200);
            res.end('Uspjesno ste dodali dobavljaca !');
        });
    },
    all:(req,res)=> {
        let query="SELECT * FROM dobavljac;";
        conn.query(query,(err,data)=> {
            if(err) {
                console.log(err);
                res.status(404);
                res.end('Not found');
            }
            res.status(200);
            res.end(JSON.stringify(data));
        });
    },
    findById:(req,res)=> {
        let id=req.params.id;
        if(id==undefined) {
            res.status(403);
            res.end('Forbidden');
        }
        let query= `SELECT * FROM dobavljac WHERE id=${id}`;
        conn.query(query,(err,data)=> {
            if(err) {
                res.status(404);
                res.end('Not found');
            }
            res.status(200);
            res.end(JSON.stringify(data));
            // conn.close();
        });
    },
    delete:(req,res)=> {
        let id= req.params.id;
        if( id==undefined ) {
            res.status(404);
            res.end('Not found');
        }
        let query= `DELETE FROM dobavljac WHERE id=${id};`;
        conn.query(query,(err,data)=> {
            if(err) {
                res.status(404);
                res.end('Not found');
            }
            res.status(200);
            res.end('Deleted row with id: '+id+"!");
        });
    }
}

module.exports=Supplier;