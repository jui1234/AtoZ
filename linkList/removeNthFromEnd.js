let getLength=function(head){
    let count=0;
    while(head!==null){
        count++;
        head=head.next;
    }
    return count;
}

let removeNthFromEnd=function(head,n){
     let index=1;
     let prev=null;
     let current=head;
     let length = getLength(head);
    let target = length - n + 1;

  
     while(current!==null){
        if(index===target){
            if(prev === null) {
                // removing head
                return head.next;
            }

            prev.next=current.next;
            break;
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
let node6=new LinkList(60);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;
node5.next=node6;

let ans=removeNthFromEnd(node1,1);

while(ans!==null){
    console.log(ans.val)
    ans=ans.next;
}