const dgram= require('dgram');

const server= dgram.createSocket("udp4");
const readline= require('readline');

server.bind(4444,'localhost');
server.on('message',message=> {
    server.send(message,4444,'244.1.1.1');
});