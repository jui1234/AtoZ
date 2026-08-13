// class Node{
//     constructor(data,next){
//         this.data=data;
//         this.next=next;
//     }
// }

//  class LinkList{
//     constructor()
//     {
//         this.head=null;
//     }
//  }

//  const head=new Node(10,null);
// const node1=new Node(100,200);
// const node2=new Node(200,300);
// const node3=new Node(300,null);

// node1.next=node2;
// node2.next=node3;
// head.next=node1;
// console.log("node1",node1);
// console.log("node2",node2);
// console.log("node3",node3);
// console.log("connected data ",node2.next.data);
// console.log("connected data ",node3.next);
// console.log("head",head);

class LinkList{
    constructor(head){
        this.head=head;
    }
}

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

let node1=new Node(10);
let node2=new Node(20);

const list=new LinkList();
list.head=node1;
node1.next=node2;

console.log("list",list.head)
console.log("list",node1.next)

