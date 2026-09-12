let MyObject = {
    id: 1,
    Name: "Ahmed",
    printData() {
        console.log(this.Name);
    }
}


let NumbersArray = [200, 100, 200, 300, 400];

let MyStudent = class {
    constructor(id, name, age) {
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }
}

let x = 1000;


let Myfun = function () {
    console.log("My function");
}

export { NumbersArray, x };//&Export Many Named props at same time