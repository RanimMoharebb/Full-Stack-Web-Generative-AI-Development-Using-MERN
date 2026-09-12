function MyConsturtor(id, name, age) {
    //^public fields
    this.Id = id;
    this.Name = name;
    this.Age = age;
    // console.log("Test", this);
}
//&Method proerties
MyConsturtor.prototype.toString = function () {
    console.log(`Data :${this.Name} ${this.Age}`);
}
//&private props using public methods

MyConsturtor.prototype.setSalary = function (v) {
    s = v + v * 0.2;
}
MyConsturtor.prototype.getSalary = function () {
    return s;
}
//&Static 
MyConsturtor.Numbers = 0;
let Mycon1 = new MyConsturtor(1, "ANV", 20);

// MyConsturtor(3, "gg", 2);//^JS function ===>call with new operator
// console.log(Mycon1);
// console.dir(Mycon1);

//*===Using Class Syntax
class MyCon {
    //*public fields
    constructor(id, nam, age) {
        //intialized
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }
}

let con1 = new MyCon();
console.log(con1);
// MyCon();//!Class constructor MyCon cannot be invoked without 'new'


class Person {
    constructor(id, name, age) {
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }

    //*pulic prop Methods
    printData = function () {
        console.log(`Name: ${this.Name} Age: ${this.Age}`);
    }


}

let POne = new Person(2020, "Ahmed", 20);
console.log(POne);

//^ Setter and Getter
//^Salary 
class Person2 {
    constructor(id, name, age) {
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }

    //&Setter and getter for Salary
    //&consice function syntax
    setSalary(v) {
        this.s = v + v * 0.2;//^s to private field ===>inside Class
    }
    getSalary() {
        return this.s;
    }
}
// let PTwo = new Person2(1010, "Eman", 23);
// PTwo.setSalary(2000);
// console.log(PTwo.getSalary());
// console.log(PTwo.s);


//^private fields ===with class

class Person3 {
    #s//^====>private field
    constructor(id, name, age) {
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }

    //&setter and getter as Method
    setSalary(v) {
        this.#s = v + v * 0.2;
    }
    getSalary() {
        return this.#s;
    }


}

// let PThree = new Person3(2020, "Ahmed Ali", 20);
// PThree.setSalary(8000);
// console.log(PThree.getSalary());
// console.log(PThree.#s);//!Uncaught SyntaxError: Private field '#s' must be declared in an enclosing class 

//&set and get ====>as property inside class ===>private fields
class Person4 {
    #s
    #id;
    constructor(id, name, age) {
        // debugger;
        // this.ID = id;
        //^Call Peropsrty Id
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }

    //^set and get
    //*For Salary
    set Salary(v) {
        this.#s = v + v * 0.2;
    }
    // get Salary() {
    //     return this.#s;
    // }
    //^For Id
    set Id(_id) {
        if (typeof _id == "string") {
            throw new Error("id must be number value")
        }
        else {
            this.#id = _id;
        }
    }
    get Id() {
        return this.#id;
    }
    toString() {
        return `P Data Name :${this.Name} ${this.Age} Salary: ${this.#s}`;
    }
}

// let PFour = new Person4("2020", "Mohamed Yasser", 20);
// console.log(PFour);
// PFour.Id = "ffff";
// console.log(PFour.Id);
// let PFive = new Person4();//^ParamLess Constructor
// console.log(PFive);
// // PFive.Id="";
// let P6 = new Person4(1010);
// console.log(P6);
// console.log(P6.Id);

// let p7 = new Person4(1010, "Yasser Mohamed", 23);
// p7.Salary = 4000;
// console.log(p7.Salary);
// console.log(p7.toString());



class Person5 {
    #id;//^private
    constructor(id, name) {
        this.Id = id;//^using property Set ===>Id
        this.Name = name;
        // this.#id = id;//!Never Ever Do this 

    }

    //^As public property
    set Id(v) {
        // debugger;
        if (typeof v == "string")
            throw new Error("Id must be Number value");
        else
            this.#id = v + 200000000;
    }
    get Id() {
        return this.#id;
    }
    toString() {

    }
}
let p11 = new Person5(2020, "Ahemd");
// console.log(p11.Id);//^excute ====>property getter ====>Id
// // console.log(p11.#id);//!ERROR
// p11.Id = 10000;//*Calling===>set property ===>creation inside Class ===>run Code 
// //catch validated value for id as private field ===>throw getter 
// console.log(p11.Id);

// let p12 = new Person5("200AAA0", "ali");
// console.log(p12.#id);
// console.log(p12.Id);


//^Static Field


class Person6 {
    // static NumberOfPErson = 0;
    static #NumberOfPErson = 0;//^As private static
    constructor(id, name, age) {
        Person6.#NumberOfPErson++;
        this.ID = id;
        this.Name = name;
        this.Age = age;
    }

    static printNumbersOfPersons() {
        return `Number Of Persons ${Person6.#NumberOfPErson}`;
    }
}

let p1 = new Person6(111, "aaa", 2);
let p2 = new Person6(112, "aaa", 20);
console.log(Person6.printNumbersOfPersons());

//^Private Methods


class Person7 {
    //& Unexpected identifier 'calc'
    // let calc
    constructor(id, name, birthyear) {
        this.Id = id;
        this.Name = name;
        this.Birthyear = birthyear;
        // this.Age = this.#calcAge();//!Never Ever Do this

    }
    #calcAge() {
        return `${2026 - this.Birthyear}`;
    }
    toString() {
        return `Person Name ${this.Name} Age: ${this.#calcAge()}`;
    }
}

let p3 = new Person7(12, "Eman", 1994);
// p3.#calcAge();//!Private field '#calcAge' must be declared in an enclosing class
console.log(p3.toString());
// console.log(p3.Age);

//&class Expression====>Under the Hook ===>as function

let Person8 = class {

};

let p4 = new Person8();
console.log(p4);