function OuterParent(A, B) {
    var z = A + B;
    //^create inside Outer ===>scope chaining Onner 
    //^ inner function can access (A,B,Z(outer parent),x(local))
    var TestOuter = "HI";
    function INNER(x) {
        console.log(z + x);
        // console.log(TestOuter);
    }
    return INNER;
}

var ReturnInner = OuterParent(10, 10);//&Calling outerParent
//^OuterParent====>No loner inside GEC ,EC for outerparent
console.log(typeof ReturnInner);
// console.log(ReturnInner);
// ReturnInner(10);
// ReturnInner(50);

//&Each Function Once Call ===>excution context ===>finished function exctuion and retur ===>remove EC for this function from CallStack
//&Scopes  return function ===>hiddend prop ===>store varaible scope ===>call from outer ===>heap===>closure
console.dir(ReturnInner);
// console.log(ReturnInner.Scopes);//get and set ===>retrive console
//^Modern JS Engine Remove unused scope varaible


//&Function return function access one param

function Counter() {
    var counter = 0;//&intia ==>zero //Store inside closure scope for return function incse used inside innerfunction
    var Test = "ffff";
    function CounterReturn() {
        //^Excute CounterREturn Body
        counter += 1;
        return counter;
    }
    return CounterReturn;
}

var CounterIncrease = Counter();//^Ecuted and Removed(Couter)
//*Each time ===>CounterIncrease
console.log(CounterIncrease());
console.log(CounterIncrease());
console.log(CounterIncrease());
console.log(CounterIncrease());
console.log(CounterIncrease());
console.dir(CounterIncrease);


//^Factory Pattern
// function IntiatCounter(_value) {
//     var counter = _value;//*VE Outer Scope
//     //^creator====>intiatCouter
//     var TectCounter = "HI";
//     var HIII = 0;
//     var counterOperation = {
//         increaseCounter: function () {
//             counter += 1;
//             return counter;
//         },
//         decreaseCouter: function () {
//             counter -= 1;
//             return counter;
//         },
//         getValue: function () {
//             return counter;
//         },
//         Test: function () {
//             console.log(TectCounter);
//         }

//     }
//     return counterOperation;
// }

// var Caller = IntiatCounter(2);
// console.log(Caller.increaseCounter());
// console.log(Caller.increaseCounter());
// console.log(Caller.increaseCounter());
// console.log(Caller.increaseCounter());
// console.log(Caller.decreaseCouter());
// console.log(Caller.decreaseCouter());//&Heap====>create Parent created
// console.log(Caller.getValue());
// console.dir(Caller.decreaseCouter);
// console.dir(Caller.increaseCounter);
// console.dir(Caller.Test);


//^Sample IIF function

function Test() {
    console.log("HIII");
}
//call Line 
Test();
//^withIIF
//
(function Test() {
    console.log("HIII");
})();//~Function Calling ()

//^Take Param
var x = 90;
(function printx(_v) {
    console.log("V:", _v);
})(x);

//IIF Take Param and return param the body fucntion inside Return
//^^ IIF Fire Function inner ===>return Return variable
var Return2 = (function Test(param) {
    return param + 5
})(10);
console.log(Return2);
//&Exrpession Function
(Return = function (param) {
    return param + 5;
})()
console.log(Return);


//^IIF===>function create and call at the same time
let CallerCounter = (function intiatCounter() {
    var counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
})();
console.log(CallerCounter());
console.log(CallerCounter());
console.log(CallerCounter());
console.log(CallerCounter());
console.log(CallerCounter());

//IntiatEmpSize and Number
let Operations = (function Intiat() {
    //^Private closure Scope
    var NumberOFEmps = 0;
    var EmpyArray = [];

    var EmpOpeartion = {
        AddNewEmp: function (EmpObject) {
            EmpyArray.push(EmpObject);
            NumberOFEmps++;
        },
        NumberOfEmployees: function () {
            return "EmpNumbers:" + NumberOFEmps
        },
        printEmps: function () {
            EmpyArray.forEach(emp => {
                console.log("EmpName::" + emp.Name);
            });
            console.log(EmpyArray);

        }
    }
    return EmpOpeartion;
})();

Operations.AddNewEmp({ id: 1, Name: 'abc' });
Operations.AddNewEmp({ id: 2, Name: 'xyz' });
Operations.AddNewEmp({ id: 2, Name: 'sss' });
console.log(Operations.NumberOfEmployees());

Operations.printEmps();
//EventListener
function TakeMessage(Message) {
    console.log("test");
    function innerFunction(evenObject) {
        console.log("EventObject", evenObject);
        evenObject.target.style.backgroundColor = "green";
        evenObject.target.style.color = "yellow";
        evenObject.target.textContent = Message;//^Message ===>closure TakeMessage ===>innerFunction can access
        // alert(evenObject.target.innerText);
    }
    return innerFunction;
}
function refcallback(eventObject) {
    console.log(eventObject)
}

function Parent() {
    alert("Hi Parent");
    //Code
    function callback(event) {
        alert("Hi Callback");

    }
    return callback;
}
window.addEventListener("load", function () {

    var MyparentParg = document.querySelector("p");
    var newH2 = document.createElement("h2");
    newH2.innerText = "Test";
    newH2.style = "background-color:darkblue;color:cyan;text-align:center";
    //bind event =====>newH2
    let ReturnTakeMesage = TakeMessage("HIIIIIIIIIIII");//*Fire Function Take Mesage
    console.dir(ReturnTakeMesage);//*closure Object {Message:"HIIIIIIIIII"};
    newH2.addEventListener("click", ReturnTakeMesage);


    //&Ways Of Bind event callabck actions

    // newH2.addEventListener("click", function (e) {

    // });
    // newH2.addEventListener("click", refcallback);
    // var ReturnParent = Parent();
    // newH2.addEventListener("click", ReturnParent);


    MyparentParg.append(newH2);
});