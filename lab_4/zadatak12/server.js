let data=[
    'Pera',
    'Peric'
];
const dgram= require('dgram');

let server=dgram.createSocket('udp4');

server.bind(3000);
// server.setBroadcast(true);
// server.setMulticastTTL(128);
let users=[];
server.on('message',(message,remote)=> {
    remote['message']=message;
    users.push(remote);
    console.log(message.toString());
    
});
let sendData=()=> {
    users.forEach(user=> {
        server.send(user[message],remote.port,remote.address);
    })
   
}
