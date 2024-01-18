const fs = require('fs')
const getNotes = function(){
    return 'Your Notes...';
}

const addNote = function( title, body ){
    const notes = loadNotes();

  //use of filter to check duplicate notes
    const dupNotes = notes.filter( function(note){
        return note.title === title;
    })

    if( dupNotes.length === 0 ){
      //pushing new notes to array with previous
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
  

  
  //multiple exports from object
  module.exports = {
    getNotes,
    addNote
  }


//on app.js
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
    handler: function(argv){
        notes.addNote( argv.title, argv.body )
    }

})
//command line:node app.js add --title="title 3" --body="body three"
