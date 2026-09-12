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