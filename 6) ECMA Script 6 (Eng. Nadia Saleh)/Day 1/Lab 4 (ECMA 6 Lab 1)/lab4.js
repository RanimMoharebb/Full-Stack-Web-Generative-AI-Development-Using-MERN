/*
Question 1
*/
console.log("----------------------------");
console.log("Question 1 ");
console.log("----------------------------");

let numbers = [10, 75, 3, 120, 55, 42, 90, 8];

let asc = [...numbers].sort((a, b) => a - b);
console.log("Ascending:", asc);

let desc = [...numbers].sort((a, b) => b - a);
console.log("Descending:", desc);

let largerThan50 = numbers.filter(num => num > 50);
console.log("Larger than 50:", largerThan50);

let maxNum = Math.max(...numbers);
console.log("Max:", maxNum);

let minNum = Math.min(...numbers);
console.log("Min:", minNum);



/*
Question 2
*/
console.log("----------------------------");
console.log("Question 2 ");
console.log("----------------------------");

function calculate(operator, ...nums) 
{
  let result;

  switch (operator) 
  {
    case "sum":
      result = nums.reduce((a, b) => a + b, 0);
      break;

    case "subtract":
      result = nums.reduce((a, b) => a - b);
      break;

    case "multiply":
      result = nums.reduce((a, b) => a * b, 1);
      break;

    case "divide":
      result = nums.reduce((a, b) => a / b);
      break;

    default:
      console.log("Invalid operator");
      return;
  }

  console.log(
    "result of " + operator + " operation for " + nums + " is" + result
  );
}

calculate("sum", 3, 1, 6, 3);



/*
Question 3
*/
console.log("----------------------------");
console.log("Question 3 ");
console.log("----------------------------");

const project = 
{
  projectId: prompt("Enter project ID"),
  projectName: prompt("Enter project Name"),
  duration: prompt("Enter project Duration"),

  printData() 
  {
    console.log("Project ID:", this.projectId);
    console.log("Project Name:", this.projectName);
    console.log("Duration:", this.duration);
  }
};
project.printData();
