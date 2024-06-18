var fs = require('fs');

let addDataInFile = function (filePath, data, passedFunc) {
    fs.appendFile(filePath, data, (err, data) => {
        if (err) {
            passedFunc(err, null)
        } else {
            passedFunc(null, data)
        }
    })

}

module.exports = {
    addDataInFile: addDataInFile
};