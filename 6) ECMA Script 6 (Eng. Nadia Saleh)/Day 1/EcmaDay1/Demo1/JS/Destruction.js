// let MyDataObject = {
//     Id: 2020,
//     Name: "Ahmed Alaa",
//     Age: 23,
//     printData: () => {
//         console.log(this.id, this.Name);
//     }
// }
// // console.log(MyDataObject.Id);
// // console.log(MyDataObject.Name);

// //^Primitev Proerty value 

// let ID = MyDataObject.Id;
// console.log(ID);

// //*RETURN VALUE OF PROERTY INSIDE NEW VARAIBLE AT ONE LINE CREATION
// let { Id } = MyDataObject;//~(Naming Confention)Search inside Myobject Data ===>property Named Id ===>Bind value new varaible with same name
// console.log(Id);
// let { id } = MyDataObject;
// console.log(id);//undefined
// //*DEstuctr Many property
// let { Name, printData } = MyDataObject;
// console.log(Name);
// printData();//&function Copy from MyObject ===>function with the same name
// console.log(printData);



// //^Anthor Object ===>Res Property values
// let UserObject = {
//     id: 2010,
//     Name: "Ehab Alaa",
//     Courses: ["HTML", "JS"],
//     NestObject: {
//         fName: "Eman",
//         LName: "yasser"
//     }
// }

// let { Courses } = UserObject;
// console.log(Courses);
// Courses.push("MVC");
// console.log(Courses);
// console.log("InsideObject", UserObject.Courses);
// //*1
// let { ...newObject } = UserObject;//^Shallow Copy
// console.log(newObject);
// newObject.Courses.push("DS");
// console.log(Courses);
// console.log("fff", newObject.Courses);
// console.log("fff", UserObject.Courses);
// //^2
// let newObject2 = { ...UserObject };//^Shallow Cpoy
// console.log(newObject2);
// newObject2.Courses.push("JAVA", "PHP");
// console.log("UserObject", UserObject.Courses);
// console.log("newObject", newObject.Courses);
// console.log("newObject2::", newObject2.Courses);

// let NewObject3 = structuredClone(UserObject);
// console.log(NewObject3);

// //&Override Function Copy Object to Anthor Object
// let MyTestObject = {
//     printDataTest: function () {
//         console.log("Test1");
//     }
// }
//^
// let { ...newTestObject } = MyTestObject;
// MyTestObject.printDataTest();
// newTestObject.printDataTest();
// newTestObject.printDataTest = function () {
//     console.log("Test2");
// }
// MyTestObject.printDataTest();
// newTestObject.printDataTest();
//&Same Res
// let newTest = {};
// newTest.printDataTest = MyTestObject.printDataTest;//Borrowing Copy
// newTest.printDataTest();
// newTest.printDataTest = function () {
//     console.log("HGGGGGGGGG");
// }
// newTest.printDataTest();
// MyTestObject.printDataTest();
// console.log(newTest.ID);//&undefined
// console.log(window.LLL);


let StudentObject = {
    id: 10000,
    Name: "Sara Mohamed",
    Track: "Mearn",
    Courses: ["JS", "React"]
}

// let printStudentData = (std) => {//^Elias Name For same Object Object
let printStudentData = ({ ...std }) => {//*Shallow Copy from input data
    // console.log(std);
    //change value Name 
    std.Track = "Pd";//*Change ===>track
    if (std.Name == "Mearn") {
        //some of operation
        console.log("After", std);
    }
}

printStudentData(StudentObject);

//^print Object After function
// console.log("StudentObject", StudentObject);

let printDataStd = ({ ...std }) => {
    let newStd = structuredClone(std);
    newStd.Track = "PD";
    newStd.Courses.push("MVC");
    console.log("newCloned", newStd);
}

printDataStd(StudentObject);
console.log(StudentObject);