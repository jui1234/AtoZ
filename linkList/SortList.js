class LinkList{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

let merge=function(left,right){
    let dummy=new LinkList(0);
    let current=dummy;

    while(left!==null && right!==null){
        if(left.val<right.val){
            current.next=left;
            left=left.next;
        }else{
            current.next=right;
            right=right.next;
        }
        current=current.next;
    }

    if(left!==null){
        current.next=left;
    }
    else {
        current.next=right;
    }

    return dummy.next;
}

let sortList=function(head){
    if(head===null || head.next===null){
        return head;
    }

    let slow=head;
    let fast=head.next;

    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }

    let right=slow.next;
    slow.next=null;
   
    let left=sortList(head);
     right=sortList(right);

     return merge(left,right)

}





let node1=new LinkList(10);
let node2=new LinkList(50);
let node3=new LinkList(30);
let node4=new LinkList(40);
let node5=new LinkList(20);
let node6=new LinkList(60);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;
node5.next=node6;

let ans=sortList(node1);

while(ans!==null){
    console.log(ans.val);
    ans=ans.next;
}
