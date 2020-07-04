const fs = require('fs');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);
const readFile =promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);

async function createFile(dirname) {
    const path = `${dirname}/text.txt`;

    try {
        await mkdir(dirname)
    } catch(e) {
        if (e.code !== 'EEXIST') {
            throw e;
        }
    }

    await writeFile(path, 'Hello file');
    const data = await readFile(path);
    console.log(data.toString())
}

createFile(`${__dirname}/testdir`)