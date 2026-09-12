import Employee from "./Employee.js";
// import Person from "./Person.js";
class Student extends Employee {
    constructor(id, name, age, salary, dept, track, courseList) {
        super(id, name, age, salary, dept);
        this.Track = track;
        this.CourseList = courseList;
    }
    // //^override method ===>parent
    toString() {
        console.log(this);
        // return `${super.toString()} Track :${this.Track} Dept: ${this.Dept}`;
    }

    TestThisInsideClass = () => {
        console.log(this);
    }
    Test2 = function () {
        console.log(this);
    }
}

export { Student };