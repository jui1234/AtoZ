class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkList{
    constructor(){
        this.head=null;
    }
}

let Node1=new Node(5);
let Node2=new Node(4);
let Node3=new Node(3);
let Node4=new Node(1);
let Node5=new Node(10);

let list=new LinkList();

list.head=Node1;
Node1.next=Node2;
Node2.next=Node3;
Node3.next=Node4;
Node4.next=Node5;



let LLTraversal=function(list){

    let array=[];
  for(let current=list.head;current!==null;current=current.next){
    array.push(current.data);
  }

  return array;
}

console.log(LLTraversal(list))