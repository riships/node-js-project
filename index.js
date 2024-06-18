const http = require('http');
const port = 3000;
const { readFile } = require('./my-modules/readfile');
const { writeFile } = require('./my-modules/writeFile');
const {createFile} = require('./my-modules/createFile');
// console.log(readFile);


let dataToStoreInFile = "this is file store check";

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    /* --- this is for reading any file --- */


    // readFile('./files/demo.html', (err, data) => {
    //     if (err) {
    //         res.end('Data not available: ' + err.message);
    //     } else {
    //         res.end(data);
    //     }
    // });


    /* --- This is for writing in file --- */

    //     writeFile('./demo.html', `<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Demo</title>
    // </head>
    // <body>
    //     <h1>Code Which is written in File is this?</h1>
    // </body>
    // </html>`, (err, data) => {
    //         if (err) {
    //             res.end('Data not available: ' + err.message);
    //         } else {
    //             res.end('File written successfully with data: '+ data);
    //         }
    //     })

    createFile('./files/demo2.html', dataToStoreInFile,(err,success)=>{
        if (err) {
            res.end('File not created : ', err.message);
        } else {
            res.end("File is created")
        }
    })



});

server.listen(port, () => {
    console.log("Server is running on http://localhost:3000");
});
