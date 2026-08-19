let oddEvenList=function(head){
  
    if (head === null || head.next === null) {
        return head;
    }

    let odd=head;
    let even=head.next;
    let evenHead=even;

    while(even!==null && even.next!==null){
       odd.next=even.next;
         odd = odd.next;

          even.next=odd.next;
        even=even.next;
    }
  
     odd.next=evenHead;
     return head;
}

class LinkList{
   constructor(val){
    this.val=val;
    this.next=null;
   }
}

const node1=new LinkList(10);
const node2=new LinkList(20);
const node3=new LinkList(30);
const node4=new LinkList(40);
const node5=new LinkList(50);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;

let ans=oddEvenList(node1);

while(ans!==null){
    console.log(ans.val)
    ans=ans.next;
}
// console.log("oddEvenList",oddEvenList(head))