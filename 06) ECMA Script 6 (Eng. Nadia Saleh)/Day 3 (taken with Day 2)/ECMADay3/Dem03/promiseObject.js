let getStudentData = () => {
    //^Waite====>excute Time ====>return Resovled ,rejectd
    return new Promise((resolve, reject) => {
        //*Server Request
        setTimeout(() => {//&Simulate Server Time ====>get Data 
            let Students = [
                { id: 1, Name: "Ahmed Mohamed", age: 20 },
                { id: 2, Name: "Eman Alaa", age: 22 },
                { id: 3, Name: "Khaled Taha", age: 23 }
            ]
            resolve(Students);
            // reject("ERROR Server Loading");
        }, 1000);
    });

};
// getStudentData();//return promiseObject
//&Status for Promise Object
//^Create promise object ====>Pending
//^Return Resolve ====>fulfilled
//^return Rejected====>rejected
//^Settled====>Fulfilled or Rejectd
//&====>Chainaple to functions ===>then===>resolve
//!===>reject ====>catch Rejected action


let printStudentData = (StudentArray) => {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {//&Simulate Server Time ====>get Data 
            StudentArray.forEach(std => {
                console.log(`StdId:${std.id} StdName:${std.Name}`);
            });
            //&Create TracksArray===>anthor Request get Tracks Data
            let Tracks = [{ id: 1010, Name: "PD" }, { id: 2020, Name: "OS" }, { id: 2030, Name: "Mearn" }];
            resolved(Tracks);
        }, 500);
    });//End of Promise Object
}


let PrintTrackData = (TrackArray,) => {
    return new Promise((reslove, rej) => {
        setTimeout(() => {//&Simulate Server Time ====>get Data 
            let TrackNames = [];
            TrackArray.forEach(track => {
                console.log(`TrackId:${track.id} TrackName:${track.Name}`);
                TrackNames.push(track.Name);
            });
            reslove(TrackNames);
        }, 2000);
    });//^End of Promise
}

let PrintTracksNames = (_Names) => {
    setTimeout(() => {
        _Names.forEach(name => {
            console.log(`Name::::${name}`);
        });
    }, 1000);
}


console.log(getStudentData());



// getStudentData().then(res => {//^return promise object
//     console.log(res);
//     printStudentData(res)//^return promise
//         .then(res => {
//             console.log(res);
//             PrintTrackData(res)//^Return promise object
//                 .then(res => {
//                     PrintTracksNames(res);
//                 })
//         })
// }).catch(error => {
//     console.log(error);
// });

//asyn and await===>function return promise object ===>await 
async function Loader() {
    let getStudentDataRes = await getStudentData();
    let TrackRes = await printStudentData(getStudentDataRes);
    let TrackNames = await PrintTrackData(TrackRes);
    PrintTracksNames(TrackNames);
}


// Loader();

//*IIF
try {
    (async () => {
        let getStudentDataRes = await getStudentData();
        let TrackRes = await printStudentData(getStudentDataRes);
        let TrackNames = await PrintTrackData(TrackRes);
        PrintTracksNames(TrackNames);
    })()
}
catch (error) {
    console.log(error);
}
