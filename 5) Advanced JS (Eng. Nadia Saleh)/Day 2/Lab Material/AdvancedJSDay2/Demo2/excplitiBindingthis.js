var MyObject1 = {
    id: 1,
    Name: 'Ahmed Mohamed',
    printData: function () {
        console.log(this);
        console.log("Id:", this.id, " Name: ", this.Name);
    }
}
//*Implicity Bind
// MyObject1.printData();

//Exceplit this
var MyObject2 = {
    id: 2,
    Name: "Eman Mohamed"
}

//^====>MyObject2====>call printData ==>with it's this
// MyObject2.printData();//!ERROR printData is not a function


//&Create Anthor Copy of function===>Manually create copy from function
// MyObject2.printDataCopy = MyObject1.printData;
// MyObject2.printDataCopy();

//^printData ===>Caller ===>MyObject1 ====>excipit this for anthor Object
//^call and apply ===>fire calling
// MyObject1.printData.call(MyObject2);//&throw Object ===>bind this ===>body code printData
//^2====>apply
// MyObject1.printData.apply(MyObject2);
//^bind
var BindRes = MyObject1.printData.bind(MyObject2);
BindRes();
//&One Line Code 
MyObject1.printData.bind(MyObject2)();//*Call direct


//&Take Params

var PDInFo = {
    Track: "PD",
    TrackLocation: "ROOM2010",
    TrackCourses: [],
    InstructorList: [],
    TeachingCourse: function (instructorName, CourseName) {
        console.log("this Course :" + CourseName + " Teaching: ", instructorName);
        this.TrackCourses.push(CourseName);
        this.InstructorList.push(instructorName);

    }
}

PDInFo.TeachingCourse("Mahmoud Ouf", "Data Structure");
console.log(PDInFo.InstructorList);
console.log(PDInFo.TrackCourses);
PDInFo.TeachingCourse("Nadia", "AdvancedJS");
PDInFo.TeachingCourse("Ghada", "Agile");
console.log(PDInFo.InstructorList);
console.log(PDInFo.TrackCourses);

//*Anthor Object with Same props
MearnInfo = {
    TrackName: "FullStack Using Mearn",
    TrackLocation: 'Room2022',
    TrackCourses: [],
    InstructorList: []
}

//&Bind Object Mearn ====>Call TeachingCourse ===>inside PDInfo Object
//&this function Take Params
//^Call
PDInFo.TeachingCourse.call(MearnInfo, "Eman Mohamed", "HTML");
PDInFo.TeachingCourse.call(MearnInfo, "Yasser Ali", "JS");
console.log(MearnInfo);

//^Apply
PDInFo.TeachingCourse.apply(MearnInfo, ["Aya", "AI"]);
console.log(MearnInfo.InstructorList);
console.log(MearnInfo.TrackCourses);
//^Bind with params
PDInFo.TeachingCourse.bind(MearnInfo)("Nadia", "ECMA6");
//*2way
var BindRes=PDInFo.TeachingCourse.bind(MearnInfo);
console.log(BindRes);
BindRes("Ahmed","C#");//*caller bind caller Object Mearn

console.log(MearnInfo.InstructorList);
console.log(MearnInfo.TrackCourses);

//*Max and Min ===>Math object
var ArryNumber = [4, 8, 9, 10, 0, 7, 20];
console.log(Math.max(ArryNumber));//!NAN===math seperated inputs
console.log(Math.max(8, 9, 7, 9));

console.log(Math.max.apply(null, ArryNumber));

