class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkList{
    constructor(head){
        this.head=head;
    }
}

let node1=new ListNode(1);
let node2=new ListNode(2);
let node3=new ListNode(3);
let node4=new ListNode(4);
let node5=new ListNode(5);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;


let reverseList=function(head) {
    let prev = null;
let current = head;
let nextNode = null;
 for(let current=head;current!==null;current=current.next){
            prev=current.next;
            nextNode=current.next.next;
            head=prev;
 }
 return head;
}