const { EventEmitter } = require('events');

const emt = new EventEmitter();

emt.on('click', a = () => {
    setImmediate(
        () => { console.log(`First listener`) }
    ) 
});

emt.on('click', b = () => { console.log(`second listener`) });

emt.on('click', c = () => {
    setImmediate(
        () => { console.log(`Third listener`) }
    ) 
});

emt.removeListener('click', b);

emt.emit('click');
