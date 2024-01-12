//importing notes.js by require. get a function in variable. get multiple export way
//without destructuring
const notes = require('./notes.js')
const msg = notes.getNotes();

//with destructuring
const {getNotes, printNotes} = require('./notes.js');
const msg = getNotes();
//importing notes.js by require. get a function in variable. get multiple export way

//get single export way.
const name = require('./name.js')

console.log(msg)
console.log(name)
