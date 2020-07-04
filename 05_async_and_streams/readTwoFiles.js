const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

function readFromFile(filename) {
    const path = `${__dirname}/files/${filename}`
    return readFile(path);
}

async function readTwoFunctions() {
    console.time('read');
    const f1 = await readFromFile('file1.txt')
    const f2 = await readFromFile('file2.txt')

    console.log(f1.toString());
    console.log(f2.toString());

    console.timeEnd('read');
}

readTwoFunctions()