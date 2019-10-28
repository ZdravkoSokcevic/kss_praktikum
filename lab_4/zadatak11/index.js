const readline= require('readline');
const dgram= require('dgram');
let command='';
var rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line',cmd=> {
    command=cmd;
    console.log("You just typed: "+cmd+"\n");
});

const client=dgram.createSocket('udp4');
client.bind(8000,()=> {
    client.addMembership('233.255.255.255');
    // client.addMembership('192.168.0.255');
});
client.on('message',(msg,rinfo)=> {
    console.log('>>%s: Primio %d bajtova od %s:%d\n',msg,msg.length,rinfo.address,rinfo.port);
});
client.send(command,3001,"localhost",err=> {
    client.close();
});

