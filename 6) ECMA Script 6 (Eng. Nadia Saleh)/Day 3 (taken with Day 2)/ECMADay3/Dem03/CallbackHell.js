let getStudentData = (callbackfun) => {
    setTimeout(() => {
        //^Catch data from webapi database end point ===>return Array Of Students
        let Students = [
            { id: 1, Name: "Ahmed Mohamed", age: 20 },
            { id: 2, Name: "Eman Alaa", age: 22 },
            { id: 3, Name: "Khaled Taha", age: 23 }
        ]
        // let Students = [];
        // console.log(Students.length);
        if (Students.length == 0) {
            console.log("Server Error Loading Data");//*Reject Error
        }
        else
            callbackfun(Students, PrintTrackData);//^Action incase StudnetArray ===>create successful

    }, 1000);

}
let printStudentData = (StudentArray, callbackfunforTrack) => {
    setTimeout(() => {
        StudentArray.forEach(std => {
            console.log(`StdId:${std.id} StdName:${std.Name}`);
        });
        //&Create TracksArray===>anthor Request get Tracks Data
        let Tracks = [{ id: 1010, Name: "PD" }, { id: 2020, Name: "OS" }, { id: 2030, Name: "Mearn" }];
        callbackfunforTrack(Tracks, PrintTracksNames);
    }, 500);

}
let PrintTrackData = (TrackArray, callbackfunforTrackNames) => {
    setTimeout(() => {
        let TrackNames = [];
        TrackArray.forEach(track => {
            console.log(`TrackId:${track.id} TrackName:${track.Name}`);
            TrackNames.push(track.Name);
        });
        callbackfunforTrackNames(TrackNames);
    }, 2000);
}
let PrintTracksNames = (_Names) => {
    setTimeout(() => {
        _Names.forEach(name => {
            console.log(`Name::::${name}`);
        });
    }, 1000);
}

getStudentData(printStudentData);


//CallBackHell