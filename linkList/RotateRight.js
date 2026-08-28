let getLength=function(head){
    let count=0;
    while(head!==null){
        count++;
        head=head.next;
    }
    return count;
}
let rotateRight=function(head,k){
   let current=head;
   let headcount=0;
   let dummy=new ListNode(null);
   let startdummy=new ListNode(null);
   let target=getLength(head)-k;
   console.log("target",target)
   while(current!==null){
    headcount++;
    if(headcount>target){
        console.log("headcount",headcount)
        dummy.next=current;
    }
    else{
        startdummy.next=current;
    }
    current=current.next;
   }
   dummy.next=startdummy;
   return startdummy.next;
}

class ListNode{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

let node1=new ListNode(1);
let node2=new ListNode(2);
let node3=new ListNode(3);
let node4=new ListNode(4);
let node5=new ListNode(5);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;

let ans=rotateRight(node1,2);

while(ans!==null){
    console.log(ans.val);
    ans=ans.next;
}




