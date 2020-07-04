const { EventEmitter } = require('events');

const db = new EventEmitter();

function Data() {
    this.bigData = new Array(1e6).join('#');

    this.send = function(data) {
        console.log(data);
    }

    this.onData = function(data) {
        this.send(data)
    }

    this.end = function() {
        db.removeListener('data', this.onData);
    }

    db.on('data', this.onData);
}

setInterval( () => {
    const data = new Data();
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
    data.end();
}, 200)