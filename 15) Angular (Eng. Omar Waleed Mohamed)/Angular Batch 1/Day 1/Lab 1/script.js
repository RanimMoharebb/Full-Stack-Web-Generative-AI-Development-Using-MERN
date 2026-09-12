"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const correctName = "admin";
const correctPassword = "1234";
let trials = 3;
let loginSuccess = false;
while (trials > 0 && !loginSuccess) {
    const name = prompt("Enter your username:");
    const password = prompt("Enter your password:");
    if (name === correctName && password === correctPassword) {
        loginSuccess = true;
        alert("Login successful!");
    }
    else {
        trials--;
        if (trials > 0) {
            alert("Wrong credentials. Remaining trials: " + trials);
        }
    }
}
if (!loginSuccess) {
    alert("Please try later or refresh the page.");
}
else {
    const numberOfQuestions = Number(prompt("Enter the number of questions you want:"));
    let score = 0;
    for (let i = 1; i <= numberOfQuestions; i++) {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operators = ["+", "-", "*", "/"];
        const operator = operators[Math.floor(Math.random() * operators.length)];
        let correctAnswer;
        switch (operator) {
            case "+":
                correctAnswer = num1 + num2;
                break;
            case "-":
                correctAnswer = num1 - num2;
                break;
            case "*":
                correctAnswer = num1 * num2;
                break;
            case "/":
                correctAnswer = parseFloat((num1 / num2).toFixed(2));
                break;
            default:
                correctAnswer = 0;
        }
        const userAnswer = Number(prompt(`Question ${i}: ${num1} ${operator} ${num2} = ?`));
        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct! Score: " + score);
        }
        else {
            alert("Wrong! Correct answer is: " + correctAnswer + "\nScore: " + score);
        }
    }
    alert("Quiz finished! Your final score is: " + score + " out of " + numberOfQuestions);
}
//# sourceMappingURL=script.js.map