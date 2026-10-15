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


let deleteKthNode=function(head,k){
    let count=1;
    let prev=head;
    if(k===1){
        head=head.next;
    }
    for(let current=head;current!=null;current=current.next){
         if(count===k){
          prev.next=current.next;
         }
         prev=current;
         count++;
    }
    return head;
}
let ans=deleteKthNode(node1,1);

let consoleLL=function(head){
    for(let current=head;current!=null;current=current.next){
        console.log(current.data);
    }
}

consoleLL(ans)


