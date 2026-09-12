//^Default values for function inputs
let MySum = (A, B, C) => {
    //*Default value
    console.log(A);
    console.log(B);
    console.log(C);
    A = A || 0;
    B = B || 0;
    C = C || 0;

    console.log(`SumNumbers:${A + B + C}`);
};

// MySum();
// MySum(30, 20);
// MySum(20, 30, 40);

let MySum2 = (A = 0, B = 0, C = 0) => {
    console.log(`SumNumbers: ${A + B + C}`);
}

// MySum2();
// MySum2(2, 3);
// MySum2(2, 3, 5);

//^Use Param value to anthor param
let MySum3 = (A = 0, B = A * 2, C = B * 2) => {
    console.log(A);
    console.log(B);
    console.log(C);
    console.log(`SumNumbers : ${A + B + C}`);
}

// MySum3(2);
//!===>default values ===>
let MySum4 = (A = 0, B = C * 2, C = B * 2) => {
    console.log(A);
    console.log(B);
    console.log(C);
    console.log(`SumNumbers: ${A + B + C}`);
}
// MySum4(2);
// MySum4(2, 2, 2);
// MySum4(2,,2);
//*Desturction With Array===>

let ArryNumbers = [10, 30, 20, 40];
let [x, y] = ArryNumbers;//^Array Index ===>index 0 ===>x ,index ==>1 y
// console.log(x);
// console.log(y);

// let z = ArryNumbers[3];
// console.log(z);
// let [a, , , b] = ArryNumbers;
// console.log(a);
// console.log(b);

// let [a, b, ...c] = ArryNumbers;
// console.log(a);
// console.log(b);
// console.log(c);