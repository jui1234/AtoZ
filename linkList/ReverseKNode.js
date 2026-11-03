class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


class LinkList {
    constructor(head){
        this.head=head;
        // this.tail=tail;
    }
}
let node1=new ListNode(10);
let node2=new ListNode(20);
let node3=new ListNode(30);
let node4=new ListNode(40);
let node5=new ListNode(50);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;
// node5.next=node3;

let reverseKGroup=function(head, k) {
    let index=1;
    let newLL=new LinkList(null);
    let current=head;
    let prev=null;
    let nextLL=null;
    let tail = head;

    while(current!==null){

        nextLL=current.next;
        current.next=prev;
        prev=current;
        current=nextLL;
        
        if(index===k){
            
            break;
        }
        index++;
    }

     newLL.head=prev;
     newLL.tail=tail;

     newLL.tail.next=current;

     return newLL;

}

let reverans=reverseKGroup(node1,3)

let  consoleLL=function(head){
    for(let current=head;current!==null;current=current.next){
        console.log(current.val)
    }
}

consoleLL(reverans.head);