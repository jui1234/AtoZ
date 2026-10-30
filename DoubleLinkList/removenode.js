class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkList{
    constructor(head){
        this.head=head;
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


let removeNthFromEnd=function(head, n) {
   let index=1;
   let LLN=0;
   for(let current=head;current!==null;current=current.next){
        LLN++;
   }

   let newn=LLN-n;
//    console.log("newn",LLN-n)

   for(let current=head;current!==null;current=current.next){
        //  console.log("head",head.val)
        if(newn===0){
           return head.next;
        }
       if(index===newn){
        current.next=current.next.next;
       }

   index++;
   }
  return head;
}

let ans=removeNthFromEnd(node1,3)

let consoleLL=function(head){
    for(let current=head;current!==null;current=current.next){
        console.log(current.val);
    }
}

consoleLL(ans);