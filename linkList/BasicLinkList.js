// Node = creates a box to hold data and a link to the next box.
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// LinkList = keeps track of the first box using head.

class LinkList{
    constructor(){
        this.head=null;
    }
}

let Node1=new Node(10);
let Node2=new Node(20);

let list=new LinkList();

list.head=Node1;
Node1.next=Node2;

let printLinkList=function(List){
    for(let current=List.head;current!==null;current=current.next){
        console.log(current.data)
    }
}

printLinkList(list);