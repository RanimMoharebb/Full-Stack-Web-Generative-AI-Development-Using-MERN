let std1 = new Student(10000, "Lila Nasser", 23, 3000, "SA", "PD", ["JS"]);
console.log(std1.toString());
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

let PrintTest = () => {
    console.log("HIIIIIIII");
}

PrintTest();
console.dir(PrintTest);


//^Secure Layer Data ====>JS file ====>
//^Two js File ====>access Data direct without====>load all script inside html
//^Add Anthor Scope ====>Module Scope
