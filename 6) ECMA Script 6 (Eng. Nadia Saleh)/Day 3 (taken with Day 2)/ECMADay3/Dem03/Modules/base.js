console.log("Start");
import * as ExportedObject from "./module1.js";//&Push All Named Export inside Modules  bind as poroperty exportObject
//^import named varaible x from module1

// import { x } from "./module1.js";//^destuct property named x from exportobject autoexport once import from module
// import { x, A } from "./module1.js";//!The requested module './module1.js' does not provide an export named 'A'
// import { x, Myfun } from "./module1.js";
//^import named props with alias name
import { x as xModule1, Myfun } from "./module1.js";

//*Import default props 
// import Data from "./module1.js";//&Search inside exportobject ===>default prope export

// import { y,ObjectArray } from "./module1.js";

import MyTest, { x, y } from "./module1.js";//^One Import Default and named props from Module1


console.log(ExportedObject);
// console.log(ExportedObject.x);

// console.log(x);
// console.dir(Myfun);


// let x = 90000;//!Identifier 'x' has already been declared (at base.js:18:5)

// console.log(xModule1);//^value from module1
// console.log(x);//^created value inside base.js

// console.log(Data);
// console.log(y);
// console.log(ObjectArray);