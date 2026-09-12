;(
    function(){


// Correct username and password
const correctName = "admin";
const correctPassword = "1234";

let trials = 3;
let loginSuccess = false;

// Login system (3 trials)
while (trials > 0 && !loginSuccess) {

    let name = prompt("Enter your username:");
    let password = prompt("Enter your password:");

    if (name === correctName && password === correctPassword) {
        loginSuccess = true;
        alert("Login successful!");
    } 
    else {
        trials--;
        if (trials > 0) {
            alert("Wrong credentials. Trials left: " + trials);
        }
    }
}

// If failed 3 times
if (!loginSuccess) {
    alert("Please try later or refresh the page.");
}
else {

    // Ask for number of questions
    let numberOfQuestions = Number(prompt("Enter the number of questions you want:"));

    let score = 0;

    for (let i = 1; i <= numberOfQuestions; i++) {

        // Random numbers
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;

        // Random operator
        let operators = ["+", "-", "*", "/"];
        let operator = operators[Math.floor(Math.random() * operators.length)];

        let correctAnswer: number;

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

        let userAnswer = Number(prompt(`Question ${i}: ${num1} ${operator} ${num2} = ?`));

        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct! Current score: " + score);
        } 
        else {
            alert("Wrong. Correct answer is: " + correctAnswer + "\nCurrent score: " + score);
        }
    }

    // Final score
    alert("Quiz finished! Your final score is: " + score + " out of " + numberOfQuestions);
}

    }
)();