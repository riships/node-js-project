var fs = require('fs');

let createFile = function (filePath, data, passedFunc) {
    fs.writeFile(filePath, data, "utf8", (err) => {
        if (err) {
            throw err
        } else {
            console.log('File create at :', filePath);
        }
    })

}

module.exports = {
    createFile: createFile
};
