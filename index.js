var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");

var newMessage = chalk.blue.bgRed.bold('A new Message for a NPM');
console.log(message);
console.log(newMessage);