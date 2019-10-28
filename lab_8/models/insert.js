const connection= require('../connection/conn')();


let insert=(req,res,next)=> {
    connection.connect(err=>{
        if(err)
            next(err);
        else {
            let sql= "INSERT INTO dobavljaci (ime,kontakt_osoba,email) VALUES ('Maxi','Miroslav','miroslav@maxi.com'),('Tempo','Milan','milan@tempo.com')";
            // console.log(connection);
            connection.query(sql,(err,result)=> {
                if(err)
                    // next(err);
                    throw err;
                console.log("Kreiran je novi dobavljac sa id-em"+result.insertId);
                res.end("Kreiran je novi dobavljac sa id-em"+result.insertId);
            });
        }
    });
};

module.exports= insert;