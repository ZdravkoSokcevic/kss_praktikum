//  Primjer emitovanja dogadjaja

let events= require('events');
let EventEmitter= new events.EventEmitter()

let connectHandler=connected=>{
    console.log('Connection succesful. ');
    EventEmitter.emit('data_recieved');
}

EventEmitter.on('connection',connectHandler);

EventEmitter.on('data_recieved',()=> {
    console.log('Data recieved succesifully');
});

EventEmitter.emit('connection');
console.log('Program ends');