const sql= require('mysql');
const crypto= require('crypto');

const passString='JEKgHusVqw7E5MhEww5LYA==';

let mysql=()=> {
    let account={
        host: 'localhost',
        user: 'zdravko',
        // password: decrypt(passString),
        password: 'aptzdravko',
        database: 'prodavnica'
    }
    const connection=sql.createConnection(account);
    return connection;
}

mysql().connect(err=>{
  if(err) throw err;
  console.log("Connected!");
});

// let encrypt=text=>{
//     var cipher = crypto.createCipher('aes-256-cbc','d6F3Efeq')
//     var crypted = cipher.update(text,'utf8','hex')
//     crypted += cipher.final('hex');
//     return crypted;
//   }
  
//   let decrypt=text=>{
//     var decipher = crypto.createDecipher('aes-256-cbc','d6F3Efeq')
//     var dec = decipher.update(text,'hex','utf8')
//     dec += decipher.final('utf8');
//     return dec;
//   }

  module.exports= mysql;
