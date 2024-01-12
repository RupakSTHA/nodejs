//importing notes.js by require. get a function in variable. get multiple export way
const getNotes = require('./notes.js')

//get single export way.
const name = require('./name.js')


const msg = getNotes();
console.log(msg)
console.log(name)
