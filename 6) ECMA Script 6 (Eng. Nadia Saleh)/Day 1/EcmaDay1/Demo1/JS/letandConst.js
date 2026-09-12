// //*Ecma5 delcare varaible without var ,withvar
// // console.log(x);//undefined====>Hoisting
// // var x;
// // x = 20;
// // console.log("x", x);

// // //*without var 
// // console.log(y);//!y is not defined
// // y = 10;//&with value
// // console.log(y);


// //^using let 
// // console.log("a before",a);//!Uncaught ReferenceError: Cannot access 'a' before initialization
// //*TDZ===>area ====>varaibles (let or const)===>TDZ constrain 1-can access before intialiez
// let a;//^declare
// a = 100;
// console.log(a);

// //*No Two varaible with same name 
// // let a="xyz";//!a has already been declared
// a = 'xyz';
// console.log(a);
// // var a;//! has already beeen declared
// //^using const
// // const z;//!Missing initializer in const declaration 
// // const a=90;//!Identifier 'a' has already been declared
// // console.log(contP);//!-cannot access before intialization
// // const contP = 90;
// // console.log(contP);

// //^Block Scoping
// //ECMA5
// // for (var i = 0; i < 3; i++) {
// //     console.log("I inside loop", i);
// // }
// // console.log("I outer Loop", i);//*3

// for (let i = 0; i < 6; i++) {
//     console.log("I inside Loop", i);
// }
// // console.log("I out of Loop", i);//! i is not defined

// {
//     //^Create Block Scope for varaible inside {}
//     let V = "BBB";
//     console.log(V);
// }

// // console.log(V);//!ERROR V is not defined

// //^let or const ===>bind as property window object

// var Number1 = 900;
// let Number2 = 1000;
// console.log(window.Number1);
// console.log(window.Number2);//undefined

// if (Number1 > 500) {
//     let MyData = "Hi To ECMA6";
//     console.log(MyData);
// }
// else {
//     let ErrorMessage = "Not True";
//     console.log(ErrorMessage);
// }
// //&Access MyData out of declartion scope (if)

// // console.log(MyData);//!ERROR is not defined

//&Top Level Code 
// let x = 30;
// console.log(x);

// setTimeout(function () {
//     console.log("HIIIIII");
//     console.log("I", i);//!ERROR i is not defined
// }, 1000);

// for (let i = 0; i < 100000; i++) {
//     console.log("I", i);
// }


window.addEventListener("load", function () {
    let AllListItems = document.querySelectorAll("li");
    // for (var i = 0; i < AllListItems.length; i++) {
    //     //for 0 ====>allListem[0]====>bind click event with callback hanlder====>inqueue ===>callbackqueue
    //     //^for i=1===>alllListItem[1]===>bind click event with callback handler ====>inqueue ===>callbacjqueue
    //     //^for i=2===>allListITme[2]===>bind click event with callback handler===>inqueue ====>callbackqueue
    //     AllListItems[i].addEventListener("click",
    //         //&Wait Untitl user Fire event click ====>time Ecucte ===>DepenedOn (GEC Empty ,user clicked listITem from HTML)
    //         function () {//*Callback event for listItem ===>wait untile user fire click event ===>excute callback fucntion
    //             //^inside callback action ==>at the time of fire
    //             console.log("Event Fired");
    //             console.log(i);
    //             alert(AllListItems[i].innerText);
    //             AllListItems[i].style = "background-color:lightgreen;color:darkblue;text-align:center;";
    //         });
    // }

    // console.log("I After Loop Finished", i);

    //Save I Scope defined ====>inheritce nested Scope ===>defined I with let
    for (let i = 0; i < AllListItems.length; i++) {
        AllListItems[i].addEventListener("click", function (e) {//value ==>o second Loop ,1 ,third loop 2
            //catch element fire event====>Event create Object 
            alert(AllListItems[i].innerText);
            AllListItems[i].style = "background-color:lightgreen;color:darkblue;text-align:center;";
        });
    }
    // console.log("I", i);//!i is not defined


    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log("Fire setTimeOut");
            console.log("IIIII", i);
        }, 1000);
    }


});//&End of loading HTML

//^CallBack Function ====>function related to event fire or delay time====>Queue Waiting
//&Time of fire ====>user clicked list Item=====>GEC SignleThread
//&Watch ===>GEC ====>empty ===>push callback handler ,waited function ====>excution context ====>CallStack
//~Event Loop ===>Watch (CallStack ) Ready To Take CallBack Action From Queue




