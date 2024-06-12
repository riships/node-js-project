const http = require('http');
const port = 3000;
const { readFile } = require('./my-modules/readfile');
console.log(readFile);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    readFile('./files/demo.html', (err, data) => {
        if (err) {
            res.end('Data not available: ' + err.message);
        } else {
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log("Server is running on http://localhost:3000");
});
