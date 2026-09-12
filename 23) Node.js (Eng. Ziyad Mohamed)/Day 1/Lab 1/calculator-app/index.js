const add = require("./operations/add");
const subtract = require("./operations/subtract");
const multiply = require("./operations/multiply");
const divide = require("./operations/divide");

const logResult = require("./utils/logger");

// command line arguments
const args = process.argv.slice(2);

const num1 = Number(args[0]);
const operator = args[1];
const num2 = Number(args[2]);

let result;

// choose operation
switch (operator) {
  case "+":
    result = add(num1, num2);
    logResult(`Result: ${result}`, "green");
    break;

  case "-":
    result = subtract(num1, num2);
    logResult(`Result: ${result}`, "yellow");
    break;

  case "*":
    result = multiply(num1, num2);
    logResult(`Result: ${result}`, "blue");
    break;

  case "/":
    result = divide(num1, num2);
    logResult(`Result: ${result}`, "red");
    break;

  default:
    console.log("Invalid operator");
}