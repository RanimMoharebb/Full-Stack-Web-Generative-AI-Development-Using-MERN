import { x as xexport, NumbersArray } from "./Module2.js"
import { TestArray } from "./Module3.js";
import { Student } from "./Classes/Student.js";


// // console.log(x);
// console.log(NumbersArray);

// //^Override x

// // x = "Ahmed";//!Assignment to constant variable.
// // xexport="AAA";//!!Assignment to constant variable.

// let XBase1 = xexport;
// console.log(XBase1);
// XBase1 = "Ahmed Alaa";
// console.log(XBase1);
// console.log(xexport);

// // NumbersArray="PPP";//!!Assignment to constant variable.
// NumbersArray.push("XYZ");
// console.log(NumbersArray);


// //&print TestArray from module3

// console.log("TestArray", TestArray);

// //&First Excute Line Inside ANy Moudle =====>imported Line


// //*Create Array OfStudents
// let StudentsArray = [
//     new Student(1010, "Ahmed Alaa", 20, 2000, "SA", "PD"),
//     new Student(1011, "Eman Ahmed", 22, 2500, "SA", "OS"),
//     new Student(1012, "Yasser Mohamed", 23, 1500, "SA", "OS"),
//     new Student(1013, "Khaled Mohamed", 21, 2300, "SA", "PD"),
//     new Student(1014, "Nana John", 21, 3000, "SA", "AI"),
//     new Student(1015, "Alaa Tarek", 25, 1200, "SA", "PD")
// ]

// console.log(StudentsArray);
// StudentsArray.sort((a, b) => {
//     return a.Age - b.Age;
// });
// console.table(StudentsArray);

// //^Filter ===>Salary
// let SalaryMorethan2000 = StudentsArray.filter(std => {
//     return std.Salary > 2000;
// });

// console.table(SalaryMorethan2000);
// //^Grouping
// let StudetByTracked = Object.groupBy(StudentsArray, ({ Track }) => {
//     return Track;
// });
// //&Return Object each Prop ===>Unique value for Track ===>value nested object inside Array with same value of track

// console.log(StudetByTracked);


//Inside Any Module
//&Module Scope
// console.log(this);//*undefined
// var x = 30;
// console.log(window.x);
// console.log(x);
// // console.log(this.x);
// console.log(window);
let std = new Student();
std.TestThisInsideClass();//^this inside Arrow function as member method inside class====>new instance object
std.Test2();
console.log(std);