const dgram= require('dgram');
const client = dgram.createSocket('udp4');
let r=  require('readline');
client.on('message',mess=> {
    console.log(mess);
});

r.createInterface({
    input:process.stdin,
    output:process.stdout
}).on('line',msg=> {
        console.log(msg);
        client.send(Buffer.from(msg),3000,'localhost');
    });

