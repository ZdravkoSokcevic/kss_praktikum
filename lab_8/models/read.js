const connection= require('../connection/conn')();

let select=(req,res)=> {
    connection.connect(err=> {
        $query='SELECT * FROM dobavljaci';
        connection.query($query,(err,data)=>{
            if(err) throw err;
            data.forEach(element => {
                    console.log(element);
            });
            res.end(JSON.stringify(data));
        });
    });
}

module.exports=select;