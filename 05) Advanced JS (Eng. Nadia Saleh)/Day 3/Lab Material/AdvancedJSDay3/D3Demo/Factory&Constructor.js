function FactoryObject(id, name, age) {
    //^Literal Object ===>return
    var newObject = {
        Id: id,
        Name: name,
        Age: age,
        printData: function () {
            console.log("Name:" + this.Name, "Age: " + this.Age);
        }
    }

    return newObject;
}


var obj1 = FactoryObject(4, "Ahmed", 20);
var obj2 = FactoryObject(7, "Eman", 23);
console.log(FactoryObject);
console.log(FactoryObject.prototype);//*{}===>No prototype of factor itself
console.dir(obj1);
console.log(obj1.__proto__);//*Parent creator===>Object
console.log(obj1.__proto__.__proto__);//&end of chain ===>null


//~createAnthorFunction =====>calling ===>different===>new Operator
//~constructor dp js
function testfun() {

}

console.log(new testfun());//^calling with new Operator
/**
 * &calling with new Operator ===>Constructor function
 * &create new Object
 * &return Object each time call fucntion with new
 * &create this ref inside function body ===>Ref to created object
 * &bind features ===>Object ===>prottype Architec for all new Objects
 *
 */

function ConsStudens(id, name, age, salary) {
    //^create Feature properties bind ===>this
    this.Id = id;
    this.Name = name;
    this.Age = age;
    //&Instead Of ===>create inside Constructor Body ===>bind prototype object of parent
    // this.printStudent = function () {
    //     console.log("StudentName:" + this.Name, " StudentAge:", this.Age);
    // }
    // //Methods Property ==>salary
    // this.setSalary = function (v) {
    //     s = v + v * 0.2;
    // }
    // this.getSalary = function () {
    //     return s;
    // }
    // console.log(ConsStudens.NumberOfStudents);
    ConsStudens.NumberOfStudents += 1;
}

//&Static property or function====>calling direct with parent
//^return Number of students
ConsStudens.NumberOfStudents = 0;
//&At Each time ===>create instance ===>increase NumberOfStudent



//*create new Intance from ConsStudents
var std1 = new ConsStudens(1010, "Ayman Ali", 23);
// console.log(std1);
// console.log(std1.__proto__);//^create using new opertor from constructor function
// console.log(std1.__proto__.constructor);
// console.log(std1.__proto__.constructor.name);
// console.log(ConsStudens);
// console.log(ConsStudens.prototype);//&object feature of parent creator (it's)
// console.log(ConsStudens.prototype.constructor.name);
// console.log(ConsStudens.prototype == std1.__proto__);
// //Bind Methods ====>ConsStudens

var std2 = new ConsStudens(1020, "Eman Yasser", 24);
// std2.setSalary(8000);
// console.log(std2);
//each Time ===>create new Instance====>implemnt const body code
//*===>1-bind property fields 
//*===>Property Methods====>No Created and bind new Intance !!!!
//*Update ====>Creator ====>No Constructor function ===>Add new Method

//*Shared Between All Intance ====>Realted ===>create From Parent===>

console.log(std1.__proto__);
console.log(std2.__proto__);
//&Property Medthods ====>create ===>prototype for parent
ConsStudens.prototype.printData = function () {
    //Constains 
    console.log("StudentName: " + this.Name, " StudentAge: " + this.Age);
}
ConsStudens.prototype.setSalary = function (value) {
    s = value + value * 0.2;//comment line
}

ConsStudens.prototype.getSalary = function () {
    console.log(s);
}

console.log(ConsStudens.prototype);
std1.printData();
std2.printData();
std1.setSalary(5000);
std1.getSalary();
console.log(std1.__proto__);//*return object prototype of parent
console.log(std1.__proto__.__proto__);//*return object ref to feature object parent of parent
console.log(std1.__proto__.__proto__.__proto__);//*null ===>End of inhertance chaining
//&throw parent
console.log(ConsStudens.prototype);//&return object proerties==>his features 
console.log(ConsStudens.prototype.__proto__);//&object features of parent Object
console.log(ConsStudens.prototype.__proto__.__proto__);//&null

//^printNumberofStudents
console.log(ConsStudens.NumberOfStudents);
// var Arr = [30, 20, 10, 10, 30, 20, 50, 80, 70];//&BuiltIn
// // console.log(Arr);
// // console.log(Arr.__proto__);
// // console.log(Arr.__proto__.constructor.name);
// console.log(Array.prototype);
// // console.log(Array.prototype.constructor);
// // console.log(Array.prototype.constructor.name);
// // console.log(Array.prototype == Arr.__proto__);
// //*create function ===>unique Array ==>share any array object ===>create inside App
// Array.prototype.uniqueArray = function () {
//     return new Set(this);//^return new Object unique Data
// }

// //^All prototype function BuiltIn objects===>immutable
// console.log(Arr.uniqueArray());
// // //!Never Ever Do this
// // Array.prototype.at=function(){

// // }
// //!find or map or foreach
