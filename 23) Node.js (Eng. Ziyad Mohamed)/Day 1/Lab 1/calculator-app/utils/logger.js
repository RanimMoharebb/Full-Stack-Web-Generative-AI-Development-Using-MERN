const chalk = require("chalk");

function logResult(message, color) {
  console.log(chalk[color](message));
}

module.exports = logResult;