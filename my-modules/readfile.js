var fs = require('fs');

let readFile = function (filePath, passedFunc) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            passedFunc(err, null)
        } else {
            passedFunc(null, data)
        }
    })

}

module.exports = {
    readFile: readFile
};