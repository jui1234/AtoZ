class DoubleNode{
    constructor(data,prev=null,next=null){
        this.data=data;
        this.prev=prev;
        this.next=next;
    }
}

class LinkList{
    constructor(head){
        this.head=head;
    }
}

let node1=new DoubleNode(10)
let node2=new DoubleNode(20)
let node3=new DoubleNode(30)
let node4=new DoubleNode(40)
let node5=new DoubleNode(50)

let list=new LinkList(node1);

list.head=node1;
node2.prev=node1;
node1.next=node2;
node2.next=node3;
node3.prev=node2;
node3.next=node4;
node4.prev=node3;
node4.next=node5;
node5.prev=node4;
let deleteTail=function(head){
   if(head.next===null){
    return null;
   }


    for(let current=head;current!=null;current=current.next){
        if(current.next===null){
            current.prev.next=null;
        }
    }
    return head;
}

let deleteKthElement=function(head,k) {


if(head===null ){
    return null
}

let index=1;

for(let current=head;current!=null;current=current.next){
    if(index===k){
        if(current.prev===null){
            head=current.next;
        
        if(head!==null){
            head.prev=null
        }
        }
        else{
            current.prev.next=current.next;
            if(current.next!==null){

        current.next.prev=current.prev;
            }
        }
           
    }
    index++;
}

return head;
  
}
//   let ansarray=arrayToDoublyLinkedList([1,2,3,4,5])
  let ans=deleteKthElement(list.head,1);

let consoleDoubleLL=function(head){
    for(let current=head;current!=null;current=current.next){
        console.log(current.data);
    }
}

consoleDoubleLL(ans);