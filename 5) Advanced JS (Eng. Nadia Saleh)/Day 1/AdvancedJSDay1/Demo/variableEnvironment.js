
// console.log("x before", x);//^undefined====>variable x binded as property Blobal Object ===>window ===>value excution step after assignment =
// console.log(window.x);
// var x = 10;//&Top levelCode ====>non blocking code====>Global Scope===> 
// console.log(window.x);
// console.log("K", K);//undefined //~defined varaible ====>without value ====?after interpertaion excuted line after =
// Test();
//Where Create variable
// console.log("G", G);//!G is not defined
// G = 60;
// console.log(G);//^Take defined from equvlat value ====>=
var MyObject = {
    id: 1010,
    Name: "ABC",
    printData: function () {
        console.log(this.Id);
        console.log(this.Name);
    }
}


function First(A, B) {
    console.log(A + B);
    console.log("inner First");

    //where we create Third inside First ===>declartion varaible inside first ===>third ===>access
    var Firstvariable = 700;
    function Third() {
        console.log(A + B + x);
        console.log(Firstvariable);
        // console.log(Y);//!ERROR Y is not defined
    }
    //Calling inside create Line

    Second();//^Second ===>create Outer First
    Third();
}
//^Access Data ====>Outer Scope=====>where the variable and function created

function Second() {
    var Y = 200;
    console.log(Y);
    // console.log(Firstvariable);//!ERROR not defined
}
var param1 = 50;
var param2 = 50;

// First(param1, param2);
//^For Each Statment And expression function ====>Object ===>store Inputs inside Function 
//^Call function input params with ref Name ===call ===>arguments

// function Sum() {
//     console.log(arguments);
// }

// var SumExpression = function () {
//     console.log(arguments);
// }

// //^function overloading
Sum();
Sum(10, 20);
Sum(10, 20, 30);
Sum(1, 1, 1, 1);


//&Many version for Sum Created
function Sum(a, b) {
    console.log(a + b);
}

//~Override
function Sum(a, b, c) {
    console.log(a + b + c);
}

function Sum(a, b, c, d) {
    // debugger;
    console.log(a + b + c + d);
    console.log(arguments);
}

//^Calling 
Sum(4, 5);//~====>NOOOOOOOOOOO Call function Sum Take Two Param
Sum(8, 8, 8);//~===>NOOOOOOOO Call function Sum Take Three Params
Sum(9, 9, 9, 9);//~====>Call Function Sum Take Four Params
//^====>Three Called ====>Call Last Created Body for sum function as it's Hoisted Sum take 4 param

//^Js=====>type or typeless
//^Interperted Code ===>from Left to right 
//^Excution ===>line By line




//&Hoisting ====>HMP===>STORE====>value ====>HEAP
Test();
function Test() {
    console.log("HIIIIIIIIIIIIIII");
    //^Calling Line By Line For Function Excution Context
}


//undefined ====>varaible exist inside without value
//not defined====>not create or defined

var K = 10000;