class Node{
    constructor(data){
       this.data=data;
       this.next=null;
    }
}

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);
const node4 = new Node(40);

node1.next=node2;
node2.next=node3;
node3.next=node4;

let current=node1;
const newNode = new Node(25);
// a
while(current!==null){
    if(current.data===20){
        newNode.next=current.next;
        current.next=newNode;
    }
    

        console.log("current",current.data)
        current=current.next;

    
}



