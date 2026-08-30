let getlength=function(head){
    let count=0;
    while(head!==null){
        count++;
        head=head.next;
    }
    return count;
}
let KthNodeFromEnd=function(head,k){
    let current=head;
    let length=getlength(head);
    let target=length-k;
    let index=0;
while(current!==null || current.next!==null){
    index++;
    if(index===target){
        return current.next;
    }
    current=current.next;
}
    return null;

}

class LinkNode{
    constructor(val){
       this.val=val;
       this.next=null;
    }
}

let node1=new LinkNode(10);
let node2=new LinkNode(20);
let node3=new LinkNode(30);
let node4=new LinkNode(30);

node1.next=node2;
node2.next=node3;
node3.next=node4;

console.log(KthNodeFromEnd(node1,3))