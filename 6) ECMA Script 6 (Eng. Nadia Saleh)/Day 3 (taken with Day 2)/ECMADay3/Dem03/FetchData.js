//^BuiltIn Function Object ====>
//&create xmlhttp request ====>call server

//&new exmlhttmp
//&xhr.read

//&return promise object
//&chaig res====>resolve or reject data 

//Fetch Data from Server
//^fetch first input param ====>url
//^default method type ====>get
//^put ,patch,delete,post
//^seconde input params ===>Object of request data 
//&Method :
//&type of data ===>Sending server header text/json
//&post ====>body :object data as string 

//*As Get ====>External Server
// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(res => {
//         console.log(res.products);
//     });

//^use it with asncy and await
// (async function () {
//     let fetchRes = await fetch('https://dummyjson.com/products');
//     console.log(fetchRes);//&Json format ===.catch data
//     let JsonFormatData = await fetchRes.json();
//     console.log(JsonFormatData);
//     console.log(JsonFormatData.products);
// })();
// //ReadMeFile ====>BackEnd====>endPosints===>url ,method,object ,res

// //^GetDataByID
// fetch('https://dummyjson.com/products/1')
//     .then(res => res.json())
//     .then(console.log);

//^GetData From Internal Json File
// fetch("Data/Students.json")
//     .then(res => {
//         return res.json();
//     }).then(result => {
//         console.log(result);
//     });
// //^GetData from internalJsonFile with propData object
// fetch("Data/Students.json/Users")
//     .then(res => {
//         return res.json();
//     }).then(result => {
//         console.log(result);
//     });
//Node packeManger ===>create Packeage===>local json object ===>Server===>create fake server
//*USing Fake Server
fetch("http://localhost:3000/Students").then(res => res.json()).then(FinalRes => {
    console.log(FinalRes);
});
//^GetUsersData
fetch("http://localhost:3000/Users").then(res => res.json()).then(FinalRes => {
    console.log(FinalRes);
});
//^GetStudentsById
fetch("http://localhost:3000/Students/1").then(res => res.json()).then(FinalRes => {
    console.log(FinalRes);
});

//^Post
fetch('http://localhost:3000/Students', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    id: '5',
   Name:"Posted Object"
  })
})
.then(res => res.json())
.then(console.log);