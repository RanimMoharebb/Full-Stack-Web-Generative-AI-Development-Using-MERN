//^Dynamic propName
let object1 = {
    id: 100,
    Name: "Ahmed"
}
console.log(object1);
//&incase props name =====>varaible 
//&property value ====>variable
let propName = "StdName";
let propValue = "Yasser Salah";
let TrackProp = "Students:"

let Object2 = {
    [propName]: propValue,//~dynamic propName get from varaible
    Id: 1000,
    [TrackProp + "Track"]: "PD",
    //^Consice function====>function statment ===>inside Object || class
    printData() {
        console.log(this);
    }

}

console.log(Object2);
Object2.printData();//^caller like statment ===>object

//&Name Confintion with Function inputs with same propNames

let CreateStudents = (Id, Name, Age, Salary) => {
    // let newStudents = {
    //     Id: Id,
    //     Name: Name,
    //     Age: Age,
    //     Salary: Salary
    // }
    // return newStudents;
    //*====
    return { Id, Name, Age, Salary };//^Name Bind property with value input with the same name
}

console.log(CreateStudents(2020, "Noha", 23, 3000));
let htmlStr = `<ul
    style="background-color: darkblue;color: white;text-align: center;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>ReactJS</li>
    <p>ITI Alex &copy; Date:${new Date().toDateString()}</p>
    <p>StudentName :${Object2["StdName"]}</p>
</ul>`;
window.addEventListener("load", () => {
    console.log("Test");
    // document.querySelector("body").innerHTML += htmlStr;
    document.querySelector("body").insertAdjacentHTML("beforeend",htmlStr);
});


