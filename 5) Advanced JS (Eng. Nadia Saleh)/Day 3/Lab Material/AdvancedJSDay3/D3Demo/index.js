//How Inhertance USing JS Literal Object
//*Create new Intance Object ====>Creator Caller Input param for creat function ===>res of create
//*====>bind ===>__proto__===>to child ===>object of features parent
//*Already realted Parent Object(Array,Object,function)==>Object
var MyObject1 = {
    id: 1,
    Name: "ABC",
    Age: 25
}

var MyArray = [2, 3, 4, 5];
var MyStr = new String("ITI");

function MyFun() {

}

console.dir(MyObject1);
console.log(MyObject1.prototype);//Hidden proerty ref to hierarch ching
//Parent of My Object ====>_proto__
console.log(MyObject1.__proto__);//^Parent ==>Object
console.log(MyObject1.__proto__.__proto__);//^ null End of Chaining Inhertanc For Object
console.dir(MyArray);
console.log(MyArray.__proto__);//^Direct Parent for intance Array value
console.log(MyArray.__proto__.__proto__);//^Parent of Parent===>Object
console.log(MyArray.__proto__.__proto__.__proto__);//^null
//String
console.dir(MyStr);
console.log(MyStr.__proto__);//^Get Feature Object for Parent throw Child
console.log(MyStr.__proto__.__proto__);//^Same Object feature Parent of String Object
console.log(MyStr.__proto__.__proto__.__proto__);//^null end of chaining

//*Function
console.log(MyFun.__proto__);//Bind Default===>function
console.dir(MyFun);
//Function ===>generator ===>Punsh Of Object
console.log(Object);//^function constuctor function===>use new keyword
//By default ====>prototype ====>Object value ref to function features
console.log(Object.prototype);//*Refere To Feature data object for creatorr object itslef
console.log(MyObject1.__proto__);
console.log(MyObject1.__proto__ == Object.prototype);//^true
//Chaining ===>With Literal create anthor Object

//*CreatorObject===>LiteralObject
var CreatorObject = {
    id: '',
    Name: 'xyz',
    Age: 20,
    Test: function () {
        console.log("HI");
    }
}
//^inher to anthor Object===>chaining child object with creator ===>access object of features from parent
var childObject = Object.create(CreatorObject);//^Chaining Inherts ===>use create from Object
childObject.Track = "Mearn";
console.dir(childObject);
//*Catch Parent Of Child Object ===>By defaut Once Created ===>__proto__
console.log(childObject.__proto__);//^Object of feature for parent
console.log(CreatorObject);
console.log(childObject.__proto__ == CreatorObject);
console.log(childObject.__proto__.__proto__);//*Object Parent of Parent
console.log(childObject.__proto__.__proto__ == CreatorObject.__proto__);

console.log(childObject);
console.log(childObject.__proto__.constructor);
console.log(childObject.__proto__.constructor.name);//^Name for ParentCreator



// console.log(MyFun.prototype);
// console.log(MyFun.prototype.constructor);
// console.log(Object.prototype.constructor);
//Myfun ===>type of Object && generator to Anthor Objects