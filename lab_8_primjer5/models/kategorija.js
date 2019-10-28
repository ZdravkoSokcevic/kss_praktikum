const conn= require('../connection/conn')();

const category={
    insert:(req,res)=> {
        let data={
            ime:   req.body.ime
        }
        let query= `INSERT into kategorija (ime) VALUES (\'${data.ime}\');`;
        conn.query(query,(err,success)=> {
            if(err) {
                res.status(404);
                res.end('Wrong data');
            }
            res.status(200);
            res.end('Succesiffully added category with id: '+success.insertId);
        });
    },
    all:(req,res)=> {
        let query= "SELECT * FROM kategorija;";
        conn.query(query,(err,data)=> {
            if(err) {
                res.status(404);
                res.end('Not found!');
            }
            res.status(200);
            res.end(JSON.stringify(data));
        });
    },
    findById:(req,res)=> {
        let id= req.params.id;
        let query= `SELECT * FROM kategorija WHERE id=${id}`;
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
        let id=req.params.id;
        if(id== undefined) {
            res.status(404);
            res.end('Not found');
        }
        let query=`DELETE FROM kategorija WHERE id=${id};`;
        conn.query(query,(err,data)=> {
            if(err) {
                res.status(500);
                res.end('Something wen\'t wrong');
            }
            res.status(200);
            res.end('Deleted!');
        });
    }
}

module.exports=category;