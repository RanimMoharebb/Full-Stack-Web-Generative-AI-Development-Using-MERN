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
//
//
//


let EmpArray = [new Employee(), new Employee(), new Employee()];
let printEmp = () => {
    console.log(EmpArray);
}










