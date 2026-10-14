class Node{
    constructor(data){
       this.data=data;
       this.Next=null;
    }

}

class LinkList{
   constructor(){
    this.head=null;
   }
}

let node1=new Node(10);
let node2=new Node(20);
let node3=new Node(30);
let node4=new Node(40);
let node5=new Node(50);

let list =new LinkList();

list.head=node1;
node1.Next=node2;
node2.Next=node3;
node3.Next=node4;
node4.Next=node5;

let InsertStartOfLinkList=function(list,num){
    let node=new Node(num);

    let store=list.head;
     list.head=node;
     node.Next=store;

     consoleLL(list)
}

let consoleLL=function(list){
    for(let current=list.head;current!==null;current=current.Next){
        console.log(current.data)
    }
}
InsertStartOfLinkList(list,4)