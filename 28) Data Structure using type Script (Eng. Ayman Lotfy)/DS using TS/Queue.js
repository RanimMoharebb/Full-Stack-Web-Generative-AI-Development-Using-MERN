class Node{
    constructor(d){
        this.data=d;
        this.next=null;
       
    }
}
class Queue{
    constructor(){
        this.start=this.last=null;
    }
    enqueue(d){
        let n=new Node(d);
        if(this.start==null)
            this.start=this.last=n;
        else{
           this.last.next= n;
           
            this.last=n;
        }
    }
    dequeue(){
        if(this.start==null)
            return null;
        let d=this.start.data;
        this.start=this.start.next
        if(this.start==null)
        	this.last==null
        return d;
    }
}
let q=new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

