const { readFileSync } = require('fs');

function fileToBase64(filePath) {
    return readFileSync(filePath, "base64");
}

module.exports = { fileToBase64 };