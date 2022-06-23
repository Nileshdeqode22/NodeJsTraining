const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

eventEmitter.on('newListener',(event,listener)=>{
    console.log(`${event} event is added`);
}
);

eventEmitter.emit('newListener','newListener');


const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a