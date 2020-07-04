const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const data = [
    {id: 1, name: 'Bill'},
    {id: 2, name: 'Stive'},
    {id: 3, name: 'Mark'},
]

const server = http.createServer( (req, res) => {
    req.on('error', (err) => console.log('Error', err));

    if (req.method === 'GET' && req.url === '/') {
        const filePath = path.join(__dirname, 'page/data.html');
        fs.readFile(filePath, (err, data) =>  {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Not Found');
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
            res.end();
        })
    } else if (req.method === 'POST' && req.url === '/data.html') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(data))
        res.end()
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
}).listen(8080, () => {
    console.log('Server running on port 8080');
});


