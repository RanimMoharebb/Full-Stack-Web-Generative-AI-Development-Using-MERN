var StudentObject = {
    id: 2
};
console.log(StudentObject);
console.log(StudentObject.constructor.name);//Object
console.log(StudentObject.valueOf());
//^Parent Creator ====>Object
//^ByDefault ===>create property ===>__proto__=====>Parent Properties Object ===>access and used
console.log(StudentObject.toString());
//^Go To Parent Creator from Child ===>__proto__
console.log(StudentObject.__proto__);//&return Object Of Parent properties
//^Parent ===>get from anthor parent
console.log(StudentObject.__proto__.__proto__);//^null ===end of link chaing

//*1- constrain ===>property Object values,delete,override,for in
//^Parent Function defineProperty

Object.defineProperty(StudentObject, "Name", {
    value: "Ahmed Mohamed",
    //&By default false
    // writable: false,//*override
    // configurable: false,//*delete
    // enumerable: false//*for in value object
});
console.log(StudentObject);
StudentObject.Name = "Yasser Ali";//!No Writable===>false
console.log(StudentObject);
//!Delete
delete StudentObject.Name;//^No delete==>configrable==>false
console.log(StudentObject);
//!retrive with for in
console.log(Object.keys(StudentObject));//^return array of name of properties object as input
console.log(StudentObject.Name);
for (var key in StudentObject) {
    console.log(key);
}

Object.defineProperties(StudentObject, {
    "Age": {
        value: 25,
        enumerable: true

    },

    "Salary": {
        //!
        // value:function(value){

        // }
        //*use Accessior set and get 
        set: function (value) {
            //First intiat ===>Salary prop
            // this.s = value + value * 0.2;//&Businnes function need to bind for salary prop
            //public variable
            s2 = value + value * 0.2;
        },
        get: function () {
            // return this.s;//^public =====>*private ===>ECM6
            return s2;
        },
        enumerable: true,

        // writable: true//!nvalid property descriptor. Cannot both specify accessors and a value or writable attribute, #<Object>


    }
});
console.log(StudentObject);
StudentObject.Salary = 2000;//*Calling Set function inside accessioy define for proeprty Salary

console.log("KKKK", StudentObject.Salary);
// StudentObject.SalaryFunction()
console.log(Object.keys(StudentObject))
console.log(StudentObject.s);
console.log(StudentObject.s2);//&undefined

//^s====>writable,delete,co
//!Never Ever Do this
// StudentObject.s = 3000;//!Match business Action inside Salary set property
// console.log(StudentObject.s);
// console.log(StudentObject.Salary);







//&Special Type Of Object
//~Creator For Many instance of Object
function Test() {

}
//~use Function ===>Structure to many Object 
console.dir(Test)