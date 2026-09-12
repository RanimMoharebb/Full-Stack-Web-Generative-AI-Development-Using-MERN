// //*Statment Function

// function Myfun() {
//     console.log("inner Myfun");
//     console.log(this);
// }


// //^call function ====>EC(Ve,Args,this)
// //^Global Object window 
// Myfun();//~Caller ===>window Object
// window.Myfun();//*Bind As proprty window Object

// console.log("this:", this);

// //*Expression 
// // Myfun2();//!ERROR
// //~variable hoisted
// console.log(Myfun2);
// var Myfun2 = function () {
//     console.log("expression function");
//     console.log(this);
// }

// Myfun2();
// window.Myfun2();



// //^Object Literal

// var MyObject = {
//     "Key": "value"
// }

//^Caller===>ObjectName.notation propKey

var StudentData = {
    id: 2020,
    "Name": "Ahmed ali",
    LoginDate: new Date().toDateString(),
    printData: function () {
        console.log("PrintDataFunction");
        console.log(this);
        console.log("StdName:", this.Name);
    },
    Courses: ["JS", "HTML"],
    InstuctorData: {
        FName: "John",
        LName: "Mark"
    },
    TestFunction: function () {
        console.log("StudentName:", this.Name, " StudentId", this.id);
        var that = this;//*line created by testfunction fully contrl by test function
        function innerFunction() {
            console.log("INNER function");
            console.log(this.Name);//undefined
            console.log("THIs inside inners", this);
            console.log("That value", that);
            console.log(that.Name);
        }
        innerFunction();//^caller window Object
        // TestFunction.innerFunction();//!TestFunction is not defined at Object.TestFunction
    }
}
// var TestObject = new Object();
// console.dir(TestObject);

// StudentData.printData();//&Caller for printData =====>StudentData ===>inside body function this refere to caller 

// //primitev(id,Name) ,ref(printData,Courses,nestedObject)
// let anthorName = StudentData.Name;
// console.log(anthorName);

// anthorName = "Eman Mohamed";
// console.log(StudentData.Name);
// console.log(anthorName);

// //&Anther Ref =====>Body of printData Object
// var FunRef = StudentData.printData;
// //*caller ====>FunRef
// console.log(FunRef);
// console.dir(FunRef);
// console.dir(StudentData.printData);
// FunRef();//^Caller =====>window===>this====>window

// StudentData.printData()//^Caller ====>studentData Object ====>this===>Object Student

// // var ArrayRef = StudentData.Courses;
// // ArrayRef[0] = 100;
// // console.log(ArrayRef);
// // console.log(StudentData.Courses);


// StudentData.TestFunction();//^StudentData Object===>this ===>nested proerty object ===>object it's















//&propNames=====>Literal Object ===>Parent Object wrapper ====>object type inside JS include function ====>spical type Object
// console.log(StudentData);
// console.dir(StudentData);

// console.dir(Myfun);

// var x = 80;
// console.dir(x);
// console.log(typeof x);
// //Wrappe RUNT ====>Object from Data
// console.log(x.toExponential());//^dot notation RUN call ====>from same object of value
// var str = "ITI";
// var Mystr = new String("Nadia");
// console.log(typeof Mystr);//Object
// //^ console.log(typeof str);//string
// // ^console.log(Mystr.)


// var ObjectOne = {
//     print: function () {
//         //innerCode
//         console.log(this);
//         var Name = "Eman";
//         //creator ===>inside print
//         function printNested() {
//             console.log(Name);
//         }
//     }
// }

// ObjectOne.print();////this===>
// var Ref = ObjectOne.print;
// Ref();//

// //Non blocking Scope
// //Top Level Code
// //this ====>window

// var x = 90;
// function Outer() {
//     var d = 70;
//     // console.log(this);
//     // var newx = x;
//     // console.log(x);
//     // newx += 10;
//     // console.log(newx);
//     x = d;
//     this.d//!violate private scope

// }
// Outer();
// // console.log(this.d);
// console.log(x);
// console.log(this.d);




//^this ====>nested Object ,callback action for event
var UserData = {
    Name: "Eman",
    id: 1,
    nestedData: {
        id: 2,
        Name: "Ahmed",
        printData: function () {
            console.log("ParentName inside childObject", UserData.Name);
            console.log("NestedData Object", this.Name);
        }
    },
    printData: function () {
        console.log("ParentObject", this.Name);
    }
}

console.log(UserData.Name);
UserData.printData();
console.log(UserData.nestedData.Name);
UserData.nestedData.printData();

var UserDataRef = UserData;
UserData = {};//change value
console.log(UserDataRef);
UserDataRef.nestedData.printData();



//Object freeze

var MyObject2 = { id: 1, Name: "Nadia", Track: ["PD", "OS"] };//Literal Object created
Object.freeze(MyObject2);
// MyObject2.Name = "Mohamed";
// console.log(MyObject2);
// //delete prop from object
// delete MyObject2.id;
// //change variable ====>Const value 
// console.log(MyObject2);
//^Same Object freezed
// var Ref2=MyObject2;
// Ref2.Tesst=90;
// console.log(Ref2);
// delete Ref2.id;
// console.log(Ref2);
// Ref2.Name="IIII";
// console.log(Ref2);
// ======================

//^Shallow Copy=== copy structued from Object chnage property  primitev value without change parent object(string,number)proppvalue
//^ change shallow copy object ===>ref prop value (Array or object )====>refelect Parent Object
var AnthorRefForObject = Object.assign({}, MyObject2);
//^change premtive
AnthorRefForObject.Name = "Sara";
AnthorRefForObject.id = 5;
AnthorRefForObject.Courses = ["React"];
console.log(AnthorRefForObject);
console.log("AnthorRefObject", AnthorRefForObject);
AnthorRefForObject.Track.push("AI");//*change of value type ===>ref data ===>Array

console.log(AnthorRefForObject);
console.log("ParentObject", MyObject2);//*relected Same prop value inside parent


//~Deep Copy
var Ref3 = structuredClone(MyObject2);//*create new instance object with new property premitive or ref property ===>bew instance
Ref3.Name = "Khaled Mohamed";//*No reflection for parent
Ref3.Track.push("ML", "SS");//*Ref change ===>no reflection
console.log("Ref3", Ref3);
console.log("Parent Object", MyObject2);

//~Deep Copy
var Re4 = JSON.parse(JSON.stringify(MyObject2));//create new Object ===>ref
console.log(Re4);
Re4.Track.push("JJJJJJJJJJJ", "PPPPPPPPPPP");
Re4.Name = "Alaa Mohamed";

console.log(Re4);
console.log(MyObject2);

// ^OOP ====>JS
//^this ===>globale scope
//^JS====>Module Scope
//^strict mode ===>
//^Arrow Function

//~JS features HL,O memeory ,Muli param
//~JS Enging



