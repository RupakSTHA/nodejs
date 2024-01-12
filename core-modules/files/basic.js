/******
Command: node basic.js
****/

//importing file system core modules
const fs = require('fs');

//notes.txt file created with text.
//writeFile will overwrite when executed over previous content.
fs.writeFileSync('notes.txt', 'My first file created');

//content will be appended in new line in notes.txt
fs.appendFileSync('notes.txt', '\n My Second line Appended');
