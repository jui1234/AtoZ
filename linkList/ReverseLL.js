const reverseList=function(head){
    let prev=null;
  let current=head;
  while(current!==null){
    let next=current.next;
    current.next=prev;
    prev=current;
    current=next;
  }

  
return prev;
}

const getLength=function(head){
    let count=0;
    while(head!==null){
        count++;
        head=head.next;
    }
    return count;
}

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
let node4=new DoubleLinkList(40);

node1.next=node2;

node2.prev=node1;
node2.next=node3;
node3.prev=node2;
node3.next=node4;
node4.prev=node3;

// middleOfLinkedList(node1);
let current=reverseList(node1);
// console.log("ans",current)

while(current!==null){
    console.log(current.val);
    current=current.next;
}



