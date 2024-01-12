//version Tested: 12.0.2
//package for getting command line input args

const yargs = require('yargs');

//Customize yargs version
yargs.version('1.1.0');

//normal node args to recieve
console.log(process.argv);

//yargs method to recieve args
console.log(yargs.argv);

//create add commang from yargs
yargs.command({
  command: "add",
  describe: "Add a new Note",
  //args for requirements
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
  //callback if command found
  handler: function(argv){
    console.log("Adding a new note title: ", argv.title)
    console.log("Adding a new note body: ", argv.body)
  }
});

//initialize yargs above function to run
yargs.parse();


//Command Tested: --help will show all the commands we have created.
ebpearls@Ebpearlss-iMac-3 node-core % node app.js --help

Results:
Commands:
  app.js add     Add a new note
  app.js remove  Remove a new note
  app.js list    Listing a new note
  app.js read    Read a new note

//command for send input
ebpearls@Ebpearlss-iMac-3 node-core % node app.js add --title=2 --body="i am body"
Adding a new note title 2
Adding a new note body i am body
