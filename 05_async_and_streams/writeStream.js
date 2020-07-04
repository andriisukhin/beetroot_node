const fs = require('fs');

const stream = fs.createWriteStream('write.txt');

stream.on('error', e => console.log(e.message));

stream.write(`Hello stream\n`, 'utf-8');

stream.end('stream', 'utf-8');
