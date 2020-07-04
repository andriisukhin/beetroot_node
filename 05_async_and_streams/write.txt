const fs = require('fs');

const readStream = fs.createReadStream(__filename);
const writeStream = fs.createWriteStream('write.txt');

readStream.on('error', e => {
    readStream.close();
    writeStream.close();
})

writeStream.on('error', e => {
    readStream.close();
    writeStream.close();
})

readStream.pipe(writeStream);
