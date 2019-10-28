const conn= require('../connection/conn')();

let deleteModel=(req,res)=> {
    conn.connect(err=> {
        if(err) throw err;
        let query="DELETE FROM dobavljaci WHERE id=3;";
        conn.query(query,(err,data)=> {
            if(err) throw err;
            if(data) {
                res.end("uspjesno obrisano");
            }
        });
    })
}

module.exports=deleteModel;