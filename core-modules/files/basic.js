/******
Command: node basic.js
****/

//importing file system core modules
const fs = require('fs');

//notes.txt file created with text
fs.writeFileSync('notes.txt', 'My first file created');
