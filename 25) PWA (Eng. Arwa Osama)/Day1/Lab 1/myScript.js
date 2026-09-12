console.log(this);

onmessage = function (event) {

    let num1 = parseInt(event.data[0]);
    let num2 = parseInt(event.data[1]);

    let sum = num1 + num2;

    postMessage([sum]);

};