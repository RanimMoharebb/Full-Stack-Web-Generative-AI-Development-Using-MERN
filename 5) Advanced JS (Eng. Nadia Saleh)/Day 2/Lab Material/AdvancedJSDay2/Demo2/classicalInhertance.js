var Students = {
    id: '1',
    Name: 'A',
    Age: 23,
    Track: 'pd',
    printData: function () {
        console.log('StudentData Name: ' + this.Name, " Age: ", this.Age, "Track:", this.Track);
    }
}


var Std1 = Object.create(Students);//^std1===child ===>extend Linked ====>Stuudents//return new instance object
//*Auto Create ====>__proto__ @ std1 ====>refere to creator parent ====>Students
console.log(Std1);
console.log(Std1.__proto__);//*Parent Object===>Students
console.log(Std1.__proto__.__proto__);//*Parent of Parent Object==>Object
//*Object Based ====>Link Object using proto property
//^First Parent ===>Students
console.log(Std1.id);
Std1.printData();
//^Seconde Parent ===>Object
console.log(Std1.valueOf());
Std1.id = 102020;
Std1.Name = "Ahmed Alaa";
console.log(Std1);
console.log(Std1.Name);
console.log(Std1.__proto__.Name);//*of Parent
Std1.printData();
console.log(Std1.hasOwnProperty("Name"));//hasOwnProperty ===>inherted from second level of inhertance 
//return true incase instance creator for property
//^return false ===>use for property but not create
console.log(Std1.hasOwnProperty("track"));//*false

var Std2 = Object.create(Students, {
    "Salary": {
        value: 2500
    }
});

console.log(Std2);
//^=====>next lecture ===>indeep ===>two pattern JS Inhertance
