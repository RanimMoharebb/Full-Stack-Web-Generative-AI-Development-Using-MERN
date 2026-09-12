class Person {
    #id;
    constructor(id, name, age) {
        //^prevent take new Instance from Person
        if (this.constructor.name == "Person")
            throw new Error("can not take instance from Person");
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }
    set Id(v) {
        if (typeof v == "string")
            throw new Error("id must be Number");
        else
            this.#id = v;
    }
    get Id() {
        return this.#id;
    }
    toString() {
        return `Data ${this.Name} Age: ${this.Age}`;
    }
}

//anthor class ===>Employee

class Employee extends Person {
    #sal;
    constructor(id, name, age, salary, dept) {
        //&Call Parent Constructor
        //&====>function super
        super(id, name, age);
        this.Salary = salary;
        this.Dept = dept;
    }
    set Salary(v) {
        this.#sal = v + v * 0.2;
    }
    get Salary() {
        return this.#sal;
    }
}

//Inhert from anthor Class ====>extend from Parent class
//^Two Steps
//^line creation child ====>use keyword ===>extends
//^inside child constructor 

let Emp1 = new Employee(1000, "Ahmed", 20, 2000, "HR");//!Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// let emp2 = new Employee("2000", "Eman", 23, 3000);
console.log(Emp1);
console.log(Emp1 instanceof Employee);
console.log(Emp1 instanceof Person);
console.log(Emp1.__proto__);
console.log(Emp1.__proto__.__proto__);
console.log(Emp1.__proto__.__proto__.__proto__);
console.log(Employee.prototype);
// let Per1 = new Person();//! can not take instance from Personat new Person 
//&====>Prototypal inhertance====>

class Student extends Employee {
    constructor(id, name, age, salary, dept, track, courseList) {
        super(id, name, age, salary, dept);
        this.Track = track;
        this.CourseList = courseList;
    }
    // //^override method ===>parent
    toString() {
        return `${super.toString()} Track :${this.Track} Dept: ${this.Dept}`;
    }
}

let std1 = new Student(10000, "Lila Nasser", 23, 3000, "SA", "PD", ["JS"]);
console.log(std1.toString());