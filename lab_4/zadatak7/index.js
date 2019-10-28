const net= require('net');
const process=require('process');
var users=[];
let server=net.createServer(conn=> {
  
    var nickname;
    var str='';
    conn.on('data',data=> {
        console.log(data);
        conn.write("tu sii");
        console.log(conn);
        (data.toString()!="\r\n")?str=str+data:1;
        if(!nickname) {
            str=str.replace('\r\n',' ');
            if(users[str]) {
                conn.write("\033[96m> Nickname is already in use. Try again later: \033[39m> ");
                return;
            }else {
                nickname= str;
                users[nickname]= conn;
                broadcast("\033[96m> "+ nickname+ ":joined the room \033[39m \r\n");
            }
        } else 
            broadcast("\033[96m> "+nickname+ ":\033[39m"+ str+ "\r\n");
            str="";
    });
    let broadcast= msg=> {
        for(let i in users) {
            users[i].write(msg);
        }
    }
}).listen(3000);

// server.listen(4000);