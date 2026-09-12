console.log("Start");//&Non block code
var x = 10;
var MyObject = {
    id: 2020,
    Name: "Ahmed"
}

function first() {
    console.log(x);
    console.log("inner First");
    //create anthor function
    function second() {
        var a = 90;
        var b = 90;
        console.log("SecondeFunction");
        console.log(a, b);
        //call third function
        Third();
        //&return from second====>GC
    }

    second();//~====>create ===>excution context for second function
    //return from first
}

function Third() {
    console.log("Third Function");
    console.log(x);
    var y = 30;
    console.log(y);
    //&by default each function inside js ===>return 
    //&finished excut for function 
    //&Remove excution contex ===>GC
    var innerObject={
        
    }

}
first();//^Call ===>first function====>create excution context for ===>function

console.log("End");

//*CallStack ===>Running JS ====>push GEC===>Global excution contex
//*Running ===>excute ===>Non blocking code
//*By default ===>inside Callstack ====>outer GEC