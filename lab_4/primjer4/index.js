const net= require('net');

var server=net.createServer(conn=> {
    console.log("Nova konekcija!");
    conn.on('data',data=> {
        console.log(data.toString());
    });
}).listen(3000);


console.log(server);