/*************************************************
 PART 1
**************************************************/
var Person = 
{
  id: 1,                 
  name: "Empty"          
};

// (employee -> person -> object)
var Employee = Object.create(Person);

Object.defineProperty(Employee, "salary", 
{
  value: 5000,           
  writable: true, 
  enumerable: true 
});


Object.defineProperty(Employee, "finalSalary", 
{
  get() 
  {
    return this.salary + this.salary * 0.2;  
  }
});

// (HREmployee -> employee -> person -> object)
var HREmployee = Object.create(Employee);

HREmployee.location = "Cairo";


console.log(HREmployee.__proto__ === Employee); 
console.log(Employee.__proto__ === Person);   


console.log(HREmployee.id);    // 1 (from Person)
console.log(HREmployee.name);  // Empty (from Person)

HREmployee.id = 10;
HREmployee.name = "Ranim";

console.log(HREmployee.id); // 10
console.log(Person.id);     // 1 (unchanged)


Person.age = 30;

console.log(HREmployee.age); // 30 (from person)



/*************************************************
 PART 1 (AGAIN) – USING defineProperties
**************************************************/

var Person2 = {};
Object.defineProperties(Person2, 
{
  id: { value: 1, writable: true },
  name: { value: "Empty", writable: true }
});


// (Employee2 -> person2 -> object)
var Employee2 = Object.create(Person2);

Object.defineProperties(Employee2, 
{
  salary: { value: 4000, writable: true },
  finalSalary: 
  {
    get() 
    {
      return this.salary * 1.2; 
    }
  }
});

var HREmployee2 = Object.create(Employee2);
Object.defineProperty(HREmployee2, "location", 
{
  value: "Alex",
  writable: true
});


/*************************************************
PART 2 
**************************************************/

// Employees array
var empArray = 
[
  { name: "Ali", salary: 4000, dept: "IT" },
  { name: "Sara", salary: 6000, dept: "HR" },
  { name: "Omar", salary: 5000, dept: "IT" }
];

// Q1: Create a function that returns another function that Take Emp and Return it’s Name
function getEmpName() 
{
  return function (emp) 
  {
    return emp.name;
  };
}


// Q2: Create a counter function that increases every time it’s called.
function counter() 
{
  var count = 0;
  return function () 
  {
    return ++count;
  };
}

const FirstCounter = counter();

console.log(FirstCounter()); // 1
console.log(FirstCounter()); // 2
console.log(FirstCounter()); // 3

const SecondCounter = counter();

console.log(SecondCounter()); // 1
console.log(SecondCounter()); // 2
console.log(SecondCounter()); // 3
console.log(SecondCounter()); // 4



// Q3: Create a function that tracks how many times a button is clicked each Time Clicked To change Body Background. 
function clickTracker() 
{
  var clicks = 0;
  return function () 
  {
    clicks++;
    document.body.style.backgroundColor = (clicks % 2 === 0 ? "white" : "lightblue");
  };
}

// Q4: Create a closure that adds a fixed number to any number.  
function addFixed(x) 
{
  return function (y) 
  {
    return x + y;
  };
}

// Q5:  Create a closure that keeps track of how many employees have been added. 
function employeeCounter() 
{
  let count = 0;
  return function () 
  {
    return ++count;
  };
}

// Q6: Create a closure that Takea Bonus percentage and applies it To Emp Salary.  
function bonus(percent) 
{
  return function (salary) 
  {
    return salary + salary * percent;
  };
}

// Q7: Create a closure that remembers a department name and returns a Greeting. 
function departmentGreeting(dept) {
  return function(name) {
    return "Hello " + name + ", welcome to the " + dept + " department";
  };
}

var greetingHR = departmentGreeting("HR"); 
console.log(greetingHR("Ranim"));  

var greetingIT = departmentGreeting("IT"); 
console.log(greetingIT("Ali")); 




// Q8:  Use map to get an array of employee names. 
var empNames = empArray.map(emp => emp.name);

// Q9: Use filter to get only employees who earn more than 4500. 
var highSalary = empArray.filter(emp => emp.salary > 4500);

// Q10: Use reduce to calculate the total Salaries.
var totalSalaries = empArray.reduce(
  (sum, emp) => sum + emp.salary,
  0
);

// Q11: Create a pure function that increases an employee salary by 10%.
// pure function -> Do NOT change the original object and Return new object with the updated data
function increaseSalary(emp) 
{
  return {
    ...emp, 
    salary: emp.salary * 1.1
  };
}

var oldEmp = { name: "Ranim", salary: 5000 };
var newEmp = increaseSalary(oldEmp);

console.log(newEmp); 
console.log(oldEmp); 



// Q12:  Add a new employee to EmpArray immutably(without changing  the original use map).
var empArray2 = empArray.map(emp => emp);
empArray2.push({ name: "Nour", salary: 4500, dept: "HR" });

console.log(empArray); 
console.log(empArray2);



// Q13: Write a higher-order function applyBonus(fn).
// higher order function (HOF) -> takes function as an argument and return function
function applyBonus(fn) 
{
  return function (emp) 
  {
    return fn(emp.salary);
  };
}

// Q14: Filter employees by department using a reusable curried function. 
// curried function -> returns another function instead of taking all arguments at once
var filterByDept = dept => emp => emp.dept === dept;
var hrEmployees = empArray.filter(filterByDept("HR"));


// Q15: Use map to update salaries (+5%) without modifying the original.
const updatedEmpArray = empArray.map(emp => ({
  ...emp,
  salary: emp.salary * 1.05
}));
