export let x = 20;//&module ===>import x ===>catch value
//&Named Export ====>import with the same name 
let ObjectData = {
    id: 1010,
    Name: "xyz",
    printData() {
        console.log("hi Data");
    }
}

//&Export ObjectData =====>NamlessProperty ===>import with anyName
export default ObjectData;
//&Each exported Object ====>One default prop 

export let NumbersArray = [10, 20, 30];

let MyClass = class {
    constructor(id, name) {
        this.Id = id;
        this.Name;
    }
}

// export default MyClass;//! Identifier '.default' has already been declared 

export let Myfun = () => {
    console.log('HI');
}

let y = "Module1";
let ObjectArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
//^Module =====>Anthor JS Access Data value ====>export


export { y, ObjectArray };