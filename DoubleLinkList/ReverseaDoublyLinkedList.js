const reverseDLL = function(head) {
  
   if(head===null)return null;
   if(head.prev===null && head.next===null)return head;
   let current=head;
   let newHead=null;
   while(current!=null){
      let temp=current.next;
      current.next=current.prev;
      current.prev=temp;
      newHead=current;
      current=temp;
   }

  
   
 return newHead;
}

class DoubleLinkList{
    constructor(val,prev,next){
        this.val=val;
        this.next=next|| null;
        this.prev=prev || null;
    }
}

let node1=new DoubleLinkList(10);
let node2=new DoubleLinkList(20);
let node3=new DoubleLinkList(30);

node1.next=node2;
node2.prev=node1;
node2.next=node3;
node3.prev=node2;

let current=reverseDLL(node1);

while(current!==null){
    console.log(current.val);
    current=current.next;
}



