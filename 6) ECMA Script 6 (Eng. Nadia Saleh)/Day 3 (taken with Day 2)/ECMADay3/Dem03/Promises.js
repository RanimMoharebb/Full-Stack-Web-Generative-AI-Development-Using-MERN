// console.log("Start");
// let x = 90;

// //AsnyCode ====>WebApi function setTimeOut
// //&Inqueue===>callback queue===>Timer Fire ====>EvenLoop ===>check thread callStack ====>excute callback for settimeout
// setTimeout(() => {
//     console.log("innerSetIme");
// });
// for (let i = 0; i < 10000; i++) {
//     console.log("I", i);
// }

// console.log("End");


let getStudentData = () => {
    setTimeout(() => {
        //^Catch data from webapi database end point ===>return Array Of Students
        let Students = [
            { id: 1, Name: "Ahmed Mohamed", age: 20 },
            { id: 2, Name: "Eman Alaa", age: 22 },
            { id: 3, Name: "Khaled Taha", age: 23 }
        ]
        return Students;
    }, 1000);
   
}

let printStudentData = (StudentArray) => {
    setTimeout(() => {
        StudentArray.forEach(std => {
            console.log(`StdId:${std.id} StdName:${std.Name}`);
        });
        //&Create TracksArray===>anthor Request get Tracks Data
        let Tracks = [{ id: 1010, Name: "PD" }, { id: 2020, Name: "OS" }, { id: 2030, Name: "Mearn" }];
        return Tracks;
    }, 500);

}

let PrintTrackData = (TrackArray) => {
    setTimeout(() => {
        let TrackNames = [];
        TrackArray.forEach(track => {
            console.log(`TrackId:${track.id} TrackName:${track.Name}`);
            TrackNames.push(track.Name);
        });
        return TrackNames;
    }, 2000);
}
let PrintTracksNames = (_Names) => {
    setTimeout(() => {
        _Names.forEach(name => {
            console.log(`Name::::${name}`);
        });
    }, 1000);
}

//!ERROR 

// let StArrRes = getStudentData();//^SetTimeOut ====>inqueue callbackqueue
// //&Depene On Ref GetStudentData =====>Wait Untile Get fininshed Excute 
// //^seTime ===>callbackQueue
// let TrArrRes = printStudentData(StArrRes);
// let TrNames = PrintTrackData(TrArrRes);
// PrintTracksNames(TrNames);


