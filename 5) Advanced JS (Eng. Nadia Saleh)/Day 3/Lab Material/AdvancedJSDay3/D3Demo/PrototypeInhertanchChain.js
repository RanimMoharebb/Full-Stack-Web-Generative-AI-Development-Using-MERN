function Person(id, name, age) {
    //&Abstrack Class =====>check Constructor Name
    if (this.constructor.name == "Person")
        throw new Error("Can Not Create Instance From Person");
    this.Id = id;
    this.Name = name;
    this.Age = age;
}

Person.prototype.toString = function () {
    console.log("Name: ", this.Name, " Age:", this.Age);
}
Person.prototype.calcAge = function () { };

//^1-Person Constructor ===>parent to anthor Constructor
//^2-Prevent create new instacne from Person
//^3-child Constructor person ====>parent to anthor Constructor


//*1//^Person Constructor ===>parent to anthor Constructor
function Employee(id, name, age, Dept) {
    // this.Id = id;
    // this.Name = name;
    // this.Age = age;
    Person.call(this, id, name, age);
    this.Dept = Dept;
}

//&First Step ==>Constructor With anthor Parent Constructor 
//*prototype of Child Constructor ====>prototype of parent
Employee.prototype = Object.create(Person.prototype);//Prototype Employee====>prototype Object for Parent
console.log(Employee.prototype.constructor.name);//&person
//^Constructor ===>Employee
Employee.prototype.constructor = Employee;
console.log(Employee.prototype.constructor);
console.log(Employee.prototype.constructor.name);
console.dir(Employee);

//Employe ====set and get salary
Employee.prototype.setSalary = function (v) {
    s = v + v * 0.1;
}
Employee.prototype.getSalary = function () {
    return s;
}
//overRide CalcAge
Employee.prototype.calcAge = function (birthyear) {
    console.log("Age:", 2026 - birthyear);
}

var emp1 = new Employee(4040, "Khaled Mohamed", 25, "HR");
emp1.toString();
console.dir(emp1);


//^//^Prevent create new instacne from Person
// var pOne = new Person(1010, "JJJ", 34);//!ERROR Can NoT Create Instance from Person

//^3child Constructor person ====>parent to anthor Constructor
function Students(id, name, age, Track, courseslist) {
    //~3-
    Employee.call(this, id, name, age, Track);
    this.CourseList = courseslist;
}
//~1-
Students.prototype = Object.create(Employee.prototype);
//~2-
Students.prototype.constructor = Students;
//~3-
Students.prototype.printCoursesWithTrack = function () {
    console.log("TrackName:", this.Dept);
    this.CourseList.forEach(function (course) {
        console.log("CourseName:", course);
    });
}

var StudentOne = new Students(1000001, "Omar Ehab Mohamed", 25, "OS", ["JAVA", "PHP", "ReactJs"]);
console.dir(StudentOne);
StudentOne.toString();//^GrandGrandParent(Person)
StudentOne.setSalary(7000);//^GranParent(Employee)
console.log(StudentOne.getSalary());
StudentOne.calcAge(1995);//^Person
StudentOne.printCoursesWithTrack();//^Direct Parent Students
console.log(StudentOne.__proto__);//&Students
console.log(Students.prototype);//&Students