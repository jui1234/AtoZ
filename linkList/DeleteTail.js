class ListNode{
    constructor(x, next){
        this.data = x;
        this.next = next;
    }
}

class LinkList{
     constructor(head){
        this.head=head;
     }
}

let node1=new ListNode(10);
let node2=new ListNode(20);
let node3=new ListNode(30);
let node4=new ListNode(40);

let List=new LinkList();

List.head=node1;
node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=null;


let deleteTail=function(head){
     if (head === null || head.next === null) {
        return null;
    }
    for(let current=head;current!==null;current=current.next){
        if(current.next.next===null){
             current.next=null;
             break;
        }
          
    }
      return head;
}
let ans=deleteTail(node1);

let consoleLL=function(head){
    for(let current=head;current!=null;current=current.next){
        console.log(current.data);
    }
}

consoleLL(ans)


