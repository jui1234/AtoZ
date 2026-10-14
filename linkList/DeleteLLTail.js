class ListNode{
    constructor(x, next){
        this.data = x;
        this.next = next;
    }
}

class LinkList{
   constructor(){
    this.head=null;
   }
}

let node1=new ListNode(10);
let node2=new ListNode(20);
let node3=new ListNode(30);
let node4=new ListNode(40);
let node5=new ListNode(50);

let list =new LinkList();

list.head=node1;
node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;
node5.next=null;

// let InsertStartOfLinkList=function(list,num){
//     let node=new ListNode(num);

//     let store=list.head;
//      list.head=node;
//      node.Next=store;

//      consoleLL(list)
// }

let consoleLLDelete=function(list){
    for(let current=list.head;current.next!==null;current=current.next){
        // console.log("Current node:", current);
        console.log("Current data:", current.data);
    }
}
 consoleLLDelete(list)
// InsertStartOfLinkList(list,4)