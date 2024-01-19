const fs = require('fs')
const getNotes = function(){
    return 'Your Notes...';
}

const addNote = ( title, body ) => {
    const notes = loadNotes();
    const dupNotes = notes.filter( (note) => note.title === title )

    const newDupNotes = notes.find( (note) => note.title === title )

    if( !newDupNotes ){
      notes.push({
        title: title,
        body: body
      })
  
      saveNotes(notes)
    }else{
      console.log('duplicate')
    }
    
}

const loadNotes = () => {
  try{

    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson)

  }catch(e){

    return [];

  }
    
}

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson)
}

const removeNote = ( title ) => {
  const notes = loadNotes();
  const keepNotes = notes.filter( (note) => note.title !== title )

  if( notes.length > keepNotes.length ){
    console.log('Notes removed')
    saveNotes(keepNotes)

  }else{
    console.log("no notes found")
  }

  
}

const listNotes = () => {
  const notes = loadNotes()
  notes.forEach((note)=>{
    console.log(note.title)
  })
}
  
const readNote = ( title ) => {

  const notes = loadNotes()

  const note = notes.find((note)=> note.title === title )

  if(note){
    console.log(note)
  }else{
    console.log("no note found")
  }
}

  
  //multiple exports from object
  module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
  }


//app.js
const yargs = require('yargs');
const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: "note title",
            //required or not
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "note body",
            //required or not
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote( argv.title, argv.body )
    }

})

yargs.command({
    command: 'remove',
    describe: "Remove a new note",
    builder: {
        title: {
            describe: "note title",
            //required or not
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote( argv.title )
    }

})

yargs.command({
    command: 'list',
    describe: "Listing a new note",
    handler(argv){
        notes.listNotes();
    }

})

yargs.command({
    command: 'read',
    describe: "Read a new note",
    builder: {
        title:{
            describe: "note title",
            demandCommand: true,
            type: "string"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }

})
yargs.parse();
