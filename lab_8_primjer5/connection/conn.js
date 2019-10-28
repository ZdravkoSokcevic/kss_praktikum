const mysql= require('mysql');

let connection=()=>{
    let conf={
        host: 'localhost',
        user: 'zdravko',
        password: 'aptzdravko',
        database: 'prodavnica1'
    }
    const conn=mysql.createConnection(conf);    
    conn.connect(err=> {
        if(err) {
            throw err;
        }
    });
    return conn;
}

module.exports= connection;