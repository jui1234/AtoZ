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

let arrayToDoublyLinkedList=function(arr) {
    let newhead=new DoubleNode(null);
    for(let i=0;i<arr.length;i++){
         newhead=arr[i];
    }

    let consvertToArray=f
}
let ans=insertNode(list.head,3,1);

let consoleDoubleLL=function(head){
    for(let current=head;current!=null;current=current.next){
        console.log(current.data);
    }
}

consoleDoubleLL(ans);