//Functional Programming 
//*Type Of function

//^10Non pure Function 
//^without input and without output
function printData() {
    console.log("HI");
}
printData();

//^2-Pure function ====.>take input params ,return output param
//^Take Two Params as first String Value refe to firstName value and second param ref to LastName as string value
//^return String value Concated
function printFullName(FName, LName) {
    //Body of Code
    return "FullName :" + FName + " " + LName;
}
console.log(printFullName('Ahmed', 'Ali'));

//^3-High Order Function====>function take paramter as function
//&===>Built In function Array Object 
//&Event callback Actions
//&====>first class ===>deal function as value
//^Full Control over Function ===>as input


function HighOrder(param1, param2) {
    if (typeof param1 == "string")
        console.log(param1)
    if (typeof param2 == "function") {
        var Number1 = 100;
        var Number2 = 100;
        //^ Call param2
        var res = param2(Number1, Number2);
        console.log(res);
    }
}

function LowOrderFun(x, y) {
    var z = x + y;
    return "Sum : " + z;
}

HighOrder(8, "FF");//^inputs match needs
HighOrder("Test", LowOrderFun);//^funcion second param as ref refere to function body
//^2
HighOrder("Second Way", function (A, B) {
    return A + B;
});


function HighOrder2(Input1) {
    //custome data inputs ====>
    //Code
    Input1(8, 9);
}

HighOrder2(function (a, b) {
    console.log(a + b);
});


function HighOrder3(input1, input2) {
    //Some Of Code
    console.log(input1);
    console.log(input2);
    //^creator for Function
    function returnedFunction(Data) {
        console.log(Data);
    }
    return returnedFunction;
}

//&Wrapper Function creator to each functionality inside code
//^====>function based====>special type of Object==>constructor function
//&Take Two params () return One param type of function
HighOrder3(7, 8);
HighOrder3("A", "B");
HighOrder3(88, "BB");

var ReturnofHO3 = HighOrder3(8, 8);
console.log(ReturnofHO3);
ReturnofHO3("Khaled Ali");