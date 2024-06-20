const mysql = require('mysql');
const http = require('http');
const url = require('url')


let port = 3000;

// Establish the database connection once
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hrhk",
    database: "dynamicdata"
});

con.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        process.exit(1);
    } else {
        console.log("Connected to the database!");
    }
});

const server = http.createServer((req, res) => {
    console.log(req.headers);
    let query = url.parse(req.url, true);
    
    let country = query.country


    res.writeHead(200, { 'Content-Type': 'application/json' });

    con.query(`SELECT * FROM users where country="${country}"`, (err, result, fields) => {
        if (err) {
            res.end("Database query error: " + err);
            return;
        }
        if (result.length > 0) {
            const jsonContent = JSON.stringify(result)
            res.end(jsonContent);
        } else {
            res.end("No results found");
        }
    });
});

server.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
});
