const http = require('http');
const port = 3000;
const { readFile } = require('./my-modules/readfile');
const { writeFile } = require('./my-modules/writeFile');
console.log(readFile);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // readFile('./files/demo.html', (err, data) => {
    //     if (err) {
    //         res.end('Data not available: ' + err.message);
    //     } else {
    //         res.end(data);
    //     }
    // });
    writeFile('./demo.html', `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo</title>
</head>
<body>
    <h1>Code Which is written in File is this?</h1>
</body>
</html>`, (err, data) => {
        if (err) {
            res.end('Data not available: ' + err.message);
        } else {
            res.end('File written successfully with data: '+ data);
        }
    })
});

server.listen(port, () => {
    console.log("Server is running on http://localhost:3000");
});
