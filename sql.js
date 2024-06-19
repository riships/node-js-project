const mysql = require('mysql');
const http = require('http');

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
    res.writeHead(200, { 'Content-Type': 'text/html' });

    con.query('SELECT username FROM users', (err, result, fields) => {
        if (err) {
            res.end("Database query error: " + err);
            return;
        }
        if (result.length > 0) {
            res.end("Result: " + result[0].username);
        } else {
            res.end("No results found");
        }
    });
});

server.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
});
