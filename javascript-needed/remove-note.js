//removing a note
const fs = require('fs')
const getNotes = function(){
    return 'Your Notes...';
}

const addNote = function( title, body ){
    const notes = loadNotes();
    const dupNotes = notes.filter( function(note){
        return note.title === title;
    })

    if( dupNotes.length === 0 ){
      notes.push({
        title: title,
        body: body
      })
  
      saveNotes(notes)
    }else{
      console.log('duplicate')
    }
    
}

const loadNotes = function(){
  try{

    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson)

  }catch(e){

    return [];

  }
    
}

const saveNotes = function(notes){
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson)
}

const removeNote = function( title ){
  const notes = loadNotes();
  const keepNotes = notes.filter( function(note){
      return note.title !== title;
  })

  if( notes.length > keepNotes.length ){
    console.log('Notes removed')
    saveNotes(keepNotes)

  }else{
    console.log("no notes found")
  }

  
}
  

  
  //multiple exports from object
  module.exports = {
    getNotes,
    addNote,
    removeNote
  }

//app.js
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
    handler: function(argv){
        notes.removeNote( argv.title )
    }

})

//command: node app.js remove --title="title 2"
