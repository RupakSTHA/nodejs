//command: npm i chalk@2.4.1

const chalk = require('chalk')

//color blue
const greenMsg =  chalk.green("here i am")
console.log(greenMsg)
console.log(chalk.blue.bold('blue bold'))


//for background blue
console.log(chalk.blue.inverse.bold('inverse bold'))
