const fs = require('fs');

const stream = fs.ReadStream("./files/bigHtml.html");

let n = 0;

stream.on('readable', () =>  {
    const data = stream.read();
    if (data !== null) {
        console.log(`Part: ${n++}, length: ${data.length}`);
        console.log(`====================`);
        console.log(data.toString());
        console.log(`====================`);
        console.log(`\nLength `, data.length);
    }
});

stream.on('end', () => {
    console.log('    END     ');
})

