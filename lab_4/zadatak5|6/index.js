const net= require('net');
var count=0;

var server=net.createServer(conn=> {
    let nickname;
    conn.write(
        '\r\n> Welcome to \033[92mnode-chat\033[39m! '+
        '\r\n'+ count + ' other people are connected at this time.'
        + '\r\n> please write your name and press enter: '
    );
    count++;
    console.log('\033[09m new connection! \033[39m');

    conn.on('close',()=> {
        count--;
    });z
    conn.on('data',data=>{
        console.log(data.toString());
        conn.write('Konektovan');
    });
});

server.listen(3000);