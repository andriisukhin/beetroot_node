// const buffer = Buffer.from("Hello");
// console.log(buffer);
// console.log(buffer.toString());
// console.log("Length  - ", buffer.length);

// console.log("========  Buffer from array =========");
// const buffer1 = Buffer.from([0x48, 0x65,  0x6c, 0x6c, 0x6]);
// console.log(buffer.toString());

// console.log("====== get 0 element of buffer ==========");
// console.log(buffer[0]);


// console.log("====== write to buffer ==========");
// console.log("Before ", buffer.toString());
// buffer[0] = 77;
// console.log("After", buffer.toString());

// console.log("====== slice ==========");
// console.log(buffer.slice(0, 3).toString());

// console.log("====== size of buffer ==========");
// const buffer3 = Buffer.alloc(100);
// console.log(buffer3);
// console.log(buffer3.length);


const http = require("http");
const https = require("https");

http.createServer(function (request, response) {
    https.get('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json', (resp) => {
        resp.on('data', (chunkBuffer) => {
            response.write(chunkBuffer);
            console.log(chunkBuffer.toString())
        });
        resp.on('end', () => {
            response.end();
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}).listen(3000);
module.