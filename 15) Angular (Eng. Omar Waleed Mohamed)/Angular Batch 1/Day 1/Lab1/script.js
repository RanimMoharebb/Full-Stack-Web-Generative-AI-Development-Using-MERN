;
(function () {
    // Correct username and password
    var correctName = "admin";
    var correctPassword = "1234";
    var trials = 3;
    var loginSuccess = false;
    // Login system (3 trials)
    while (trials > 0 && !loginSuccess) {
        var name_1 = prompt("Enter your username:");
        var password = prompt("Enter your password:");
        if (name_1 === correctName && password === correctPassword) {
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
        var numberOfQuestions = Number(prompt("Enter the number of questions you want:"));
        var score = 0;
        for (var i = 1; i <= numberOfQuestions; i++) {
            // Random numbers
            var num1 = Math.floor(Math.random() * 10) + 1;
            var num2 = Math.floor(Math.random() * 10) + 1;
            // Random operator
            var operators = ["+", "-", "*", "/"];
            var operator = operators[Math.floor(Math.random() * operators.length)];
            var correctAnswer = void 0;
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
            var userAnswer = Number(prompt("Question ".concat(i, ": ").concat(num1, " ").concat(operator, " ").concat(num2, " = ?")));
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
})();
