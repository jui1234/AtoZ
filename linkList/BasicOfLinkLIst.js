class Node{
    constructor(data,next){
        this.data=data;
        this.next=next;
    }
}

const node1=new Node(100,200);
const node2=new Node(200,300);
const node3=new Node(300,null);

node1.next=node2;
node2.next=node3;
console.log("node1",node1);
console.log("node2",node2);
console.log("node3",node3);
console.log("connected data ",node2.next.data);
console.log("connected data ",node3.next);