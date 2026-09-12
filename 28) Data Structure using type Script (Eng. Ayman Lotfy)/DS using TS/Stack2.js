class Node{
    constructor(d){
        this.data=d;
        this.next=null;
      
    }
}
class Stack{

    constructor(){
        this.start=null;
    }
    unshift(d)//push function accept value
    {
        let n=new Node(d);// create node data=d, next,prev=null
        //if there is no nodes 
        if(this.start==null){
            this.start=n;
        }
        else{
           
            n.next=this.start;
            this.start=n;
        }
        
    }
    shift()//pop
    {
        if(this.start==null)
            return null;
        let n=this.start.data;
        this.start=this.start.next;
     
       
        return n;
        
    }
}




let s=new Stack();
s.unshift(10);
s.unshift(20);
s.unshift(30);
console.log(s.shift());//30
console.log(s.shift());//20
console.log(s.shift());//10
console.log(s.shift());
