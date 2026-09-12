var x = 90;
var MyObject = {
    id: 1, Name: "abc"
}

function First(A, B) {
    console.log(A);//&private scope inside function  (private varaible)
    console.log(B);
    A = A + 80;//&private inside function
    B = B + 80;//&private change inside function
    console.log("A after Change", A);
    console.log("B after Change", B);

    //*varaible ===>create and intialzied inside function ===>access public scope after function calling
    F = "ABC";//*create varaible without use var keyword
    //&private Scope inside Parent creator ==>function first
    function Second(C, D) {
        //^Access ===?third===>create inside Globale Scope
        var innerSecond = 7000000;
        console.log(A)
        console.log(B)
        console.log(A + B + C + D);

        console.log(x);
        Third(2, 2);

    }

    //&create varaible with var keyword inside function====>private scope inside function
    var H = "Hamed";
    console.log(H);
    Second(10, 10);
    //^access innerSconde variable
    // console.log(innerSecond);//!ERROR

}

function Third(Y, Z) {
    //^Access===>x
    console.log(x + Y + Z);
    //Access ===>A,B===>changed inside first
    console.log("inside third", A, B);
}

// First();//ParamLess
//&Params with Global varaible value
var A = 100;
var B = 100;
First(A, B);//^primitve value ====>inside A ===>Globale scope,primitev value B


// //^Globale Scope ===(x,MyObject,first,third);
// console.log(x);


// //*print value A,B after call First

// console.log("A after Calling First", A);
// console.log("B after calling First B:", B);

// //*After First Call====>F creation and intialed inside first function
// console.log("F outer first scope", F);

// // console.log("H outer first :", H);//!ERROR H is not defined

// //*Call function Second after calling first
// // Second(80, 80);


// var L = 8080;
// var K = 9090;
// function Myfun() {
//     // console.log("L as Globle ", L);
//     //*varaible with same name of globale
//     // L = 7070;//!never ever do this
//     // console.log("L after change inside function", L);//&fire Outer Scope

//     //&redfined varaible with the same name for globale varaile
//     //~Hoisting inside Function
//     console.log("K before:", K);
//     var K = 5050;
//     console.log("K:", K);

//     //************** */
//     //~private function scope =====>defined using var
//     var ALtervalue = L;
//     ALtervalue = ALtervalue + "  :::" + 7070;
//     console.log("newValue:", ALtervalue);

//     O = 90;

// }
// // console.log("call before", L);

// Myfun();

// //^calle L after calling Myfun
// console.log("L:", L);
// //^Call K outer function
// console.log(K);//^Global value

// var L = L + " " + 5;
// console.log(L);
// // console.log(P);//!ERROR F is not defined
// P = 90;