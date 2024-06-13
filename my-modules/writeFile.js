var fs = require('fs');

let writeFile = function (filePath, data, passedFunc) {
    fs.writeFile(filePath, data, 'utf8', (err) => {
        if (err) {
            passedFunc(err, null);
        } else {
            passedFunc(null, data);
        }
    });
}

module.exports = {
    writeFile: writeFile
};
