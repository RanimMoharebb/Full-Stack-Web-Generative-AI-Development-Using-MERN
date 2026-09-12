
// example 1
/*
want to validate that :
    input is not empty
    input is a number
    operation is (+, -, *, /)
*/

var input1 = prompt("Please enter first number:");
// validation
while (!input1 || input1.trim() === "" || isNaN(Number(input1))) 
{
    alert("First number is not valid, Please enter a valid number");
    input1 = prompt("Please enter first number:");
}
var num1 = Number(input1); // convert only after validation



var input2 = prompt("Please enter second number:");
// validation
while (!input2 || input2.trim() === "" || isNaN(Number(input2))) 
{
    alert("Second number is not valid, Please enter a valid number");
    input2 = prompt("Please enter second number:");
}
var num2 = Number(input2);




var operation = prompt("Enter operation (+, -, *, /):");
// validation
while (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") 
{
    alert("The operation is not valid, Please enter a valid operation (+, -, *, /)");
    operation = prompt("Enter operation (+, -, *, /):");
}

var result;

switch (operation) 
{
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
}

alert("Result: " + result);








// example 2
/*
    math.random() -> output is between 0 to 1
    so need to multiply by 10 to make the output between 0 to 10
    but the number will be float so will use math.floor 
    math.floor() -> will round down
    so the max number will be  9, and we want the range to be from 0 to 10
    so will need to add 1 at the end
*/


/*
want to validate that :
    input is not empty
    input is a number
    number is between 1 and 10
*/

var randomNumber = Math.floor(Math.random() * 10) + 1;
var userGuess;
var counter = 0;

while (userGuess !== randomNumber) 
{
    userGuess = Number(prompt("Guess a number between 1 and 10:"));
    // validation
    if (userGuess === null || userGuess === "" || isNaN(userGuess) || userGuess < 1 || userGuess > 10 ) 
    {
        alert("Please enter a valid number");
        continue;
    }
    counter++;

    if (userGuess > randomNumber) 
    {
        alert("The number is too high");
    } 
    else if (userGuess < randomNumber) 
    {
        alert("The number is too low");
    } 
    else 
    {
        alert("The number is CORRECT , Attempts: " + counter);
    }
}







//example 3

var numbers = [12, -5, 8, 0, -3, 15, 22, -8, 6];
var positiveNumbers = [];
var negativeNumbers = [];
var sumOfPositiveNumbers = 0;
var CountOfNegativeNumbers = 0;
var i;

for (i=0; i<numbers.length; i++) 
{
    if (numbers[i] > 0) 
    {
        positiveNumbers.push(numbers[i]);
        sumOfPositiveNumbers = sumOfPositiveNumbers + numbers[i];
    } 
    else if (numbers[i] < 0) 
    {
        negativeNumbers.push(numbers[i]);
        CountOfNegativeNumbers++;
    }
}

console.log("Positive numbers:", positiveNumbers);
console.log("Negative numbers:", negativeNumbers);
console.log("Sum of positive numbers:", sumOfPositiveNumbers);
console.log("Number of negative numbers:", CountOfNegativeNumbers);




//example 4

var num1;
var num2;
var multiplication;
var line;
for(num1=0; num1<=10; num1++)
{
    line="";
    for(num2=0; num2<=10; num2++)
    {
        multiplication=num1*num2;
        line = line + (multiplication) + "\t";
    }
    console.log(line)
}



// example 5 Pattern 1
/*

will use 2 var 
i for row number
j for numbers of shapes will be printed in each row


*      1 shape (i=1) -> j=1
**     2 shape (i=2) -> j=1,2
***    3 shape (i=3) -> j=1,2,3
****   4 shape (i=4) -> j=1,2,3,4
*****  5 shape (i=5) -> j=1,2,3,4,5

*/


var i; 
var j;
var shape;
var space;

for (i=1; i<=5; i++) 
{
    shape="";
    for (j=1; j<=i; j++) 
    {
        shape += "*";
    }
    console.log(shape);
}





// example 5 Pattern 2

/*

will use 3 var 
i for row number
j for numbers of shapes will be printed in each row
r for numbers of spaces will be printed in each row

    *        4 space + 1 shape  -> (i=1) -> r=1,2,3,4  -> j=1
   ***       3 space + 3 shape  -> (i=2) -> r=1,2,3  -> j=1,2,3
  *****      2 space + 5 shape  -> (i=3) -> r=1,2   -> j=1,2,3,4,5
 *******     1 space + 7 shape  -> (i=4) -> r=1     -> j=1,2,3,4,5,6,7
*********    0 space + 9 shape  -> (i=5) -> r=0     -> j=1,2,3,4,5,6,7,8,9

// r is always -> 5-i
// j is always -> 2*i-1

*/


var i 
var j
var r 

for (i=1; i<=5; i++) 
{
    shape=""
    for (r=5-i; r>0; r--) 
    {
        shape += " ";
    }
    for (j=1; j<=(2*i-1); j++) 
    {
        shape += "*";
    }
    console.log(shape);
}




