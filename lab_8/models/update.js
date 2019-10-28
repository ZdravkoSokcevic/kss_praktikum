const conn= require('../connection/conn')();

let update=(req,res)=> {
    conn.connect(err=> {
        if(err)throw err;
        $query= "UPDATE dobavljaci SET ime='Beer commerce' WHERE id=1";
        conn.query($query,(err,data)=> {
            if(err) throw err;
            if(data) {
                let response='Uspjesno editovano';
                console.log(response);
                res.end(response);
            }
        });
    });
}

module.exports= update;
