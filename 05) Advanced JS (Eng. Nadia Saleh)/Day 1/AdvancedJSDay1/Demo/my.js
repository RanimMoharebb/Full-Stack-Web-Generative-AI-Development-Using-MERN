
// ely b3d el = bashofo fel interprataion mode
// ely abl el = bashofo fel hoisting mode 
// so lw 3mlt call lel expression function fo2 ma 3rftha hygen error (myfun2 is not a function) -> 3shan fun2 blnsbalo lsa var





// this keyword -> special variable by7slo auto creation once the execution contex of the function is fired 
// this mwgoda -> object, simple function call, event listener, new, call,apply,bind
// this msh sbta w msh static w msh dyman btshawer 3ala nfs el 7aga
// refrence of this depedns on :-
//      1.ana ezay b3ml call lel function
//      2. ezay b3ml assign lel function deh fel actual code
// this by7slha bind 7sb el caller -> el caller dh el 7aga ely  property mno (object.name) lw msh property l 7aga yb2a caller is window






// this in statment functions
function myfun1(){
    console.log("inner my fun1")
    console.log(this) // btshawer 3ala el window object (caller is window object)
}

// this in expression functions (same as statment function)
var myfun2=function(){
    console.log("inner my fun1")
    console.log(this) // btshawer 3ala el window object
}
console.dir(myfun1) // prints the directive


// once i assign the parancies of the function -> ana kda b3ml file lel function -> fa yro7 yshof men owner coner bta3 el function deh
// once ana 3mlt call lel function -> by7sl creation lel EC -> so 3 7agat by7slhom creation -> variable enviroment, argument object, this
// el code mwgod fel global object window -> so we can call function with 2 ways :
myfun1() //caller -> window object
window.myfun1() // bind as a property 3ala el window object

console.log(this) // btshawer 3ala el window object





// this and dot notation inside object (object literal)
var myobject={
    "key":"value", // premitive
    printdata: function(){ // refrence
        console.log("print data of function")
        console.log(this) // caller is the object so this.key = myobject.key
    }
}

console.log(myobject)
console.log(myobject.key)
console.dir(myobject) // prints the directive 
// dot notation bdedy lel variable bta3y properites lw hwa msh object 3shan a3ml str.

// can i change the caller refrence ?
var neww = myobject.printdata 
console.dir(neww) // will be the same as (function) console.dir(printdata)








// this inside  nested function
// lw 3yza ageb this lel function yb2a bt3ha 

function func3(){
    that=this
    function innerfun3(){
        console.log(that) // caller is func3
        console.log(this) // caller is window (this 3yza lel object ely by3ml call lel function)
    }
}





// this with nested object
var userdat={
    name: "sara",
    nesteddata:{
        id: 5,
        name: "ahmed",
        printdata: function(){

            console.log("nfih")
        }
    },
    printdata: function(){
        console.log(this.name) // caller is object so prints sara
},








// this inside callback action for event