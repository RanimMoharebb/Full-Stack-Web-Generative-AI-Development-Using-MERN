// //^StatmentFunction,expression function ===>ECMA5
// function MyFun() {
//     console.log("HHH");
// }
// let MyFunAsExxpression = function () {
//     console.log("Expression function");
// }
// //^Arrow Function ECMA6====>expression function ===>without using function keyword
// let MyArrow = () => {
//     console.log("ARROwFucntion");
// }

// //^Take One Parame Log One Line Code
// let MyArrowWithOneParame = x => console.log("X*2:", x * 2);

// //^Take One Param Return One Line Code
// let MyArrowWithOneLineReturn = x => { return x * 2 };

// //^Many Params with Many Line Code
// let MyArrowWithParams = (x, y) => {
//     let z = 2;
//     return x * y * z;
// }

// //^Calling Way for expression and statment and Arrow Same
// MyArrowWithOneParame(5);
// MyFun();
// MyFunAsExxpression();
// MyArrow();

// console.log(MyArrowWithOneLineReturn(10));
// console.log(MyArrowWithParams(2, 2));

//~Arrow As Constructor
// function MyStd(id) {
//     this.Id = id
// }
// let MyEmp = function (name) {
//     this.Name = name;
// }
// let std1 = new MyStd(20);
// console.log(std1);
// let emp1 = new MyEmp("Ahmed");
// console.log(emp1);
// //&Using Arrow As Constructor
// let Person = (id, name) => {
//     this.Id = id;
//     this.Name = name;
// }

// let p1 = new Person(1010, "Eman");//!-Person is not a constructor ===>?create Person with Arrow Sytax
//^====>this ===>Arrow ====>this inside Arrow Function ====>outer Parent Scope
//create Arrow As preoprty inside Object

let MyObject = {
    id: 2020,
    Name: "Ahmed Ali",
    printData: function () {
        console.log(this);
        console.log(this.id, this.Name);
    },
    printDataAsArrow: () => {
        console.log(this);
        console.log(this.id, this.Name);
    },
    //^Nested Object inside Object
    NestdObject: {
        Age: 20,
        id: 9090,
        Name: 'Lila Alaa',
        printNested: () => {
            console.log(this);
            console.log(this.id, this.Name, this.Age);
        }
    },
    TestThisAsArrowInsideStatment: function () {
        console.log(this);//Caller===
        console.log(this.id, this.Name);
        //^create ===>Arrow Function 
        let MyNestdArrowInsidStatment = () => {
            console.log("TestArrow Inside Statment");
            console.log(this);
        }
        console.dir(MyNestdArrowInsidStatment);
        MyNestdArrowInsidStatment();

        function NestedStatment() {
            console.log("Inside Statment isnideStatment inside Object", this);
        }
        //call nested
        NestedStatment();//caller===>this==>window Excution Line Statment
    }
}
// MyObject.printData();//^Caller ===>Myobject ===>this refere
// MyObject.printDataAsArrow();//^Caller ===>MyObject===>Arrow No bind this ===>parent scope ===>window in that case
// //^Caller Hierarchy Object with nested Object
// MyObject.NestdObject.printNested();//&caller ===>nestedObject===>Outer Parent ===>in that case ====>window
// //!Not Working
// MyObject.printDataAsArrow.call(MyObject);//~Still Arrow Go To UP Parent
// MyObject.NestdObject.printNested.apply(MyObject.NestdObject);

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// MyObject.TestThisAsArrowInsideStatment();//

// let Ref = MyObject.TestThisAsArrowInsideStatment;
// Ref();



//!No Arguments inside Arrow body
let SumOperation = function (operator, Num1, Num2) {
    console.log(arguments);
    let Res = 0;
    // if (operator == "+") {
    //     Res = Num1 + Num2;
    // }
    // return Res;
    for (let i = 1; i < arguments.length; i++) {
        switch (operator) {
            case "+":
                Res += arguments[i];
                break;
        }
    }
    return Res;
}

console.log(SumOperation("+", 20, 20));
console.log(SumOperation("+", 20, 20, 30));
console.log(SumOperation("+", 20, 20, 30, 40));
console.log(SumOperation("+", 20, 20, 30, 40, 50));


let SumOperationAsWrrow = (operator, Num1, Num2) => {
    console.log(arguments);//!=ReferenceError: arguments is not defined
    let Res = 0;
    // if (operator == "+") {
    //     Res = Num1 + Num2;
    // }
    // return Res;
    for (let i = 1; i < arguments.length; i++) {
        switch (operator) {
            case "+":
                Res += arguments[i];
                break;
        }
    }
    return Res;
}

console.log(SumOperationAsWrrow("+", 10, 10));
console.log(SumOperationAsWrrow("+", 10, 10, 20));
console.log(SumOperationAsWrrow("+", 10, 10, 20, 30));
