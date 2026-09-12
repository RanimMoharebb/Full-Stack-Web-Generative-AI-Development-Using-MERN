//&Function header Creation ====>ref name ===>prev with ... operator ===>the Of Params ===>while calling Function 
let Operations = (operator, Number1, Number2, ...RestOfParams) => {
    console.log(operator);
    console.log(Number1, Number2);
    // console.log(Numbers);
    //&Collect ===>punsh Of inputs ===>function ====>One Collector As Arrow Object
    console.log(RestOfParams);

}

// Operations("+", 20);
// Operations("+", 20, 30);
// Operations("+", 20, 30, 40);
// Operations("+", 20, 30, 40, 60);
// Operations("+", 20, 30, 40, 60, 70);

//!After use Rest heade===>defined anthor ref input param
//!Rest parameter must be last formal parameter
// let MathOperation = (op, ...RestOfNumbers,Number5) => {
let MathOperation = (op, ...RestOfNumbers) => {
    console.log(op);
    console.log(RestOfNumbers);
    let SumRes = RestOfNumbers.reduce((prev, acc) => {
        return prev + acc;
    });
    console.log(SumRes);
}

MathOperation("+", 20);
MathOperation("+", 20, 20);
MathOperation("+", 20, 20, 30);
MathOperation("+", 20, 20, 30, 30);


//&Seperate Data ====>to Function Take Sperated inputs 
//^While Function Calling
let ArrayNumbers = [30, 20, 10, 20, 0, 6, 1];
console.log(Math.max(30, 20, 8, 10));
console.log(Math.min(4, 1, 3, 0, 1));
function TestArgsWithArray() {
    console.log(arguments);
}
TestArgsWithArray(100, 200);
TestArgsWithArray(100, 200, ArrayNumbers);
TestArgsWithArray(100, 200, ...ArrayNumbers);

console.log(Math.min(ArrayNumbers));//!NAN
console.log(Math.max.apply(null, ArrayNumbers));
console.log(Math.max(...ArrayNumbers));

//*Rest with Statment Funciton
function Hi(...Params) {
    console.log(Params);
    console.log(arguments);
}

Hi(20)
Hi("X", "Y", "Z");