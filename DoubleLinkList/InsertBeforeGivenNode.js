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

let insertBeforeGivenNode=function(head,node,X){
    let newNode=new DoubleNode(X);

    if(head===null){
        return null;
    }
    

    for(let current=head; current!=null;current=current.next){
      if(current.data===node){
          if(current.prev===null){
             current.prev=newNode;
             newNode.next=current;
             head=newNode;
            }
      else{
            // Insert before current node
            let previous = current.prev;

            previous.next = newNode;
            newNode.prev = previous;

            newNode.next = current;
            current.prev = newNode;
      }
      }
      
    
    }
    return head;
}


let ans=insertBeforeGivenNode(list.head,30,5);

let consoleDoubleLL=function(head){
    for(let current=head;current!=null;current=current.next){
        console.log(current.data);
    }
}

consoleDoubleLL(ans);

