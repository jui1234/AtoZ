let getLength=function(head){
    let count=0;
    while(head!==null){
      count++;
      head=head.next;
    }
    return count;
}
let deleteMiddle=function(head){
    let index=1;
    let length=getLength(head);
    let mid=Math.floor(length/2)+1;
    let current=head;
    let prev=null;

    while(current!==null){
        if(index===mid){
           prev.next=current.next;
        }
        prev=current;
        current=current.next;
        index++;
    }
    return head;
}

class LinkList{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

let node1=new LinkList(10);
let node2=new LinkList(20);
let node3=new LinkList(30);
let node4=new LinkList(40);
let node5=new LinkList(50);


node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;

let ans=deleteMiddle(node1);

while(ans!==null){
    console.log(ans.val)
    ans=ans.next;
}







