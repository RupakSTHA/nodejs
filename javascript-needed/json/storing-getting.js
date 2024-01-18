const fs = require('fs')
const book = {
    title: "Ego is the enemy",
    author: "Ryan Holiday"
}

//convert object to json
const bookJSON = JSON.stringify(book);
//save json file
fs.writeFileSync('1-json.json', bookJSON)


//read json file
const dataBuffer = fs.readFileSync('1-json.json')
//change bits data to string
const dataJson = dataBuffer.toString()
//convert json to object
const data =  JSON.parse(dataJson)

data.name = "dipak";
data.age = 30

fs.writeFileSync( "1-json.json", JSON.stringify(data) )
console.log(data)
