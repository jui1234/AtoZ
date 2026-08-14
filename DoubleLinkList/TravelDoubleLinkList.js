class DoubleLinkList{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}

let node1=new DoubleLinkList(10);
let node2=new DoubleLinkList(20);
let node3=new DoubleLinkList(30);

node1.next=node2;
node2.prev=node1;
node2.next=node3;
node3.prev=node2;

let current=node1;

while(current!==null){
    console.log(current.val);
    current=current.next;
}



