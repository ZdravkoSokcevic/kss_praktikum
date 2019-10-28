let dgram= require('dgram');
let users=[];
dgram.createSocket('udp4');

dgram.on('message',msg=>{
    dgram.send(msg);
})

// let writeMsg(message=> {
//     users.forEach(user=> {
//         user.write(msg);
//     });
// });
dgram.bind(3000);