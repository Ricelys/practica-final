// index.js
const fs = require('fs');
const path = require('path');

function getHtmlContent() {
  const filePath = path.join(__dirname, 'index.html');
  return fs.readFileSync(filePath, 'utf8');
}

module.exports = getHtmlContent;
