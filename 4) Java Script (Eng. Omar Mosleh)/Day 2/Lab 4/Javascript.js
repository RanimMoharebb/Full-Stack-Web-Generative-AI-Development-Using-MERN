
console.log("-------------------------------" );
console.log("Extra Exercise on Board :-" );
console.log("-------------------------------" );

const user = {
    name: "Omar",
    role: "TA",
    courses: "HTML, CSS, JS"
};

// Deep copy (makes user and new user totally seprated)
var neuUser = JSON.parse(JSON.stringify(user));

console.log("user before modification: ", user);
console.log("new user before modification: ", neuUser);

neuUser.courses = "Advanced JS";

console.log("user after modification: ", user);
console.log("new user after modification: ", neuUser);



console.log("-------------------------------" );
// Exercise 1: Array Utilities
// Create utility functions for arrays:
console.log("Exercise 1: Array Utilities :-" );
console.log("-------------------------------" );

// a) Find maximum value in array
function findMax(arr) {
    arr.sort(function(a,b)
    {
        return a-b
    })
    console.log("the maximum of all elements is :" + arr[arr.length-1]);
}

// b) Find minimum value in array
function findMin(arr) {
    arr.sort(function(a,b)
    {
        return b-a
    })
    console.log("the minimum of all elements is :" + arr[arr.length-1]);

}


// c) Calculate sum of array
function sumArray(arr) {
    var mappedArray = arr.reduce(
        function(accumulator, currentValue){
            return accumulator + currentValue;
        }, 0
    )
    console.log("the sum of all elements is :" + mappedArray);
}

// d) Remove duplicates from array
function removeDuplicates(arr) {
    var uniqueNumbers = [];

    arr.forEach(function(item) {
        if (!uniqueNumbers.includes(item)) {
            uniqueNumbers.push(item);
        }
    });

    console.log("The unique elements are: " + uniqueNumbers);
}



// Test your functions
var numbers = [3, 7, 2, 9, 2, 5, 7, 1];


sumArray(numbers)
findMax(numbers)
findMin(numbers)
removeDuplicates(numbers)





console.log("-------------------------------" );
// Exercise 2: Book Library
// Create a book library system:
console.log("Exercise 2: Book Library :-" );
console.log("-------------------------------" );


var library = 
{
    books: [],

    addBook: function(title, author, year) 
    {
        this.books.push({ title, author, year });
    },

    findByAuthor: function(author) 
    {
        var result = [];
        for (var i in this.books) 
        {
            if (this.books[i].author === author) 
            {
                result.push(this.books[i]);
            }
        }
        return result;
    },

    findByYear: function(year) 
    {
    var result = []; 
        for (var i in this.books) 
        {
            if (this.books[i].year === year) 
                {
                    result.push(this.books[i]); 
                }
        }
        return result;    
    },

    displayAll: function() 
    {
        var result = []; 
        for (var i in this.books) 
        {
                    result.push(this.books[i]); 
        }
        return result; 
    }
};

// Test for Exercise 2
library.addBook("Book One", "Author A", 2020);
library.addBook("Book Two", "Author B", 2021);
library.addBook("Book Three", "Author A", 2022);
console.log("Books by Author A:", library.findByAuthor("Author A"));
console.log("Books from 2021:", library.findByYear(2021));
library.displayAll();








console.log("-------------------------------" );
// Exercise 3: Date Calculator
// Create functions to work with dates:
console.log("Exercise 3: Date Calculator :-" );
console.log("-------------------------------" );


// a) Days between two dates
function daysBetween(date1, date2) 
{
    var start = new Date(date1);
    var end = new Date(date2);
    // *1000 as it should be milliseconds not seconds
    var oneDay = 1000*60*60*24
    var timedDifference = end - start;
    var daydDifference = timedDifference/oneDay;
    return daydDifference
}

// b) Is leap year?
// to be a leapy year -> the year should be -> divisible by 4 & divisible by 4 & not divisible by 100
function isLeapYear(year) 
{
    var bool = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    return bool
}



// c) Format date as "MM/DD/YYYY"
function formatDate(date) 
{
    var d = new Date(date);
    // starts from 0 not 1
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear();
    var fullDate =month + "/" + day + "/" + year

    return fullDate;
}


// d) Get day name (Monday, Tuesday, etc.)
function getDayName(date) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDay = new Date(date);
    var dayName= days[currentDay.getDay()];
    return dayName
}


// Test
console.log("daysBetween 2026-01-01 and 2026-01-21 is: " + daysBetween("2026-01-01", "2026-01-21")); 
console.log("is 2024 LeapYear? " + isLeapYear(2024));
console.log("2026-01-21 format is: " + formatDate("2026-01-21"));
console.log("2026-01-21, date name is : "+getDayName("2026-01-21")); 







console.log("-------------------------------" );
// Exercise 4: String Utilities
// Create string manipulation functions:
console.log("Exercise 4: String Utilities :-" );
console.log("-------------------------------" );


// a) Reverse a string 
// LIFO -> Stack
function reverseString(str) {
    var stack = [];      
    var reversed = "";  

    for (var i in str) 
    {
        stack.push(str[i]);
    }

    for (var i in str) 
    {
         reversed += stack.pop();
    }

    return reversed;
}


// b) Count vowels in string 
function countVowels(str) {
    var vowels = ["a","e","i","o","u","A","E","I","O","U"];
    var count = 0;
    for (var i in str) 
    {        
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}


// c) Title case (capitalize first letter of each word)
function titleCase(str) {
    str = str.toLowerCase();
    var words = str.split(" ");
    var result = [];
    for (var i in words) 
    {
        var word = words[i];
        if (word.length > 0) 
        {
            var capitalizedWord = word[0].toUpperCase() + word.slice(1);
            result.push(capitalizedWord);
        } 
    }

    return result.join(" ");
}

// d) Is palindrome?
function isPalindrome(str) 
{
    str=str.toLowerCase();

    var newStr=""
    var words=str.split(" ");
    for (var i in words)
    {
        newStr = newStr + words[i];  
    }

    var reversedStr=reverseString(newStr)

    if (newStr == reversedStr)
    {
        return true;
    }
    else
    {
        return false;
    }
}


// Test Exercise 4
console.log(reverseString("hello"));        // "olleh"
console.log(countVowels("JavaScript"));     // 3
console.log(titleCase("hello world"));      // "Hello World"
console.log(isPalindrome("racecar"));       // true
console.log(isPalindrome("A man a plan a canal Panama"));  // true


console.log("-------------------------------" );
// Exercise 5: Object Manipulation
// Create a todo list using objects and arrays:
console.log("Exercise 5: Object Manipulation :-" );
console.log("-------------------------------" );


var todoList = 
{
    todos: [],

    add: function(task, priority) 
    {
        this.todos.push({ task, priority, completed: false });
    },

    complete: function(task) 
    {
        for (var i in this.todos) 
        {
            if (this.todos[i].task === task) 
            {
                this.todos[i].completed = true;
            }
        }
    },

    remove: function(task) 
    {
        var newTodos = [];
        for (var i in this.todos) 
        {
            if (this.todos[i].task !== task) 
            {
                newTodos.push(this.todos[i]);
            }
        }
        this.todos = newTodos;
    },

    getByPriority: function(priority) 
    {
        var result = [];
        for (var i in this.todos) 
        {
            if (this.todos[i].priority === priority) 
            {
                result.push(this.todos[i]);
            }
        }
        return result;
    },

    displayAll: function() 
    {
        for (var i in this.todos) 
        {
            var t = this.todos[i];
            console.log("Task: " + t.task + ", Priority: " + t.priority + ", Completed: " + t.completed);
        }
    }
};

// Test for Exercise 5
todoList.add("Do homework", "High");
todoList.add("Buy groceries", "Medium");
todoList.add("Clean room", "Low");

todoList.complete("Buy groceries");
todoList.remove("Clean room");

console.log("High priority tasks:", todoList.getByPriority("High"));
console.log("All tasks:");
todoList.displayAll();
