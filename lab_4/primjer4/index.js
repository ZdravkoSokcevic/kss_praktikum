const net= require('net');

var server=net.createServer(conn=> {
    console.log("Nova konekcija!");
}).listen(3000);
