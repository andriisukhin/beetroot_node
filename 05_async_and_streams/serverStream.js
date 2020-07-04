const http  = require('http');
const fs = require('fs');

function sendFile(file, res) {
    file.pipe(res);
}

new http.createServer( (req, res) => {
    // console.log(req.url)
    if (req.url === '/bigHtml.html') {
        const file = new fs.ReadStream("./files/bigHtml.html");
        sendFile(file, res);
    }
}).listen(3000, '127.0.0.1');