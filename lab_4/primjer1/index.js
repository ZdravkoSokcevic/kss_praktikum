const events= require('events');
let EventEmitter=events.EventEmitter;

let chat=new EventEmitter();

// chat.on('message',message=> {
//     //EventEmitter.on('eventName',handler);
//     console.log(message);
// });
chat.on('neki_naziv',message=> {
    console.log(message);
});

chat.emit('neki_naziv','Poruka');

