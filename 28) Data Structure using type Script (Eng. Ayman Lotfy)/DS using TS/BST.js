class Node{
    constructor(d){
        this.data=d;
        this.left=this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    insert(d){
        let n=new Node(d);
        if(this.root==null)
            this.root=n;
        else{
            let r=this.root;
            while (r) {
            if(d<r.data && r.left==null){
                r.left=n;
                return;
            }
            else if(d<r.data)
                r=r.left;
            else if(d>r.data && r.right==null){
                r.right=n;
                return;
            }
            else if(d>r.data)
                r=r.right;
        }
        }
        
    }
    printinorder(){
       this.printinorderR(this.root); 
    }
    printinorderR(r){
        if(r==null)
            return;
        
        this.printinorderR(r.left)
                console.log(r.data);

        this.printinorderR(r.right)
        
    }
}

//inorder => left parent right
//preorder => parent left right
//postorder => left ,right  parent
let t=new BST();
t.insert(20);
t.insert(30);
t.insert(10);
t.insert(50);
t.insert(90);
t.insert(1);
t.printinorder();