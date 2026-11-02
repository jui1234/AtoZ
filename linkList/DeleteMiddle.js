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

let node1=new ListNode(3);
let node2=new ListNode(8);
let node3=new ListNode(7);
let node4=new ListNode(1);
let node5=new ListNode(3);
let node6=new ListNode(3);

node1.next=null;

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;
node5.next=node6;

let  deleteMiddle=function(head) {

    let total=0;

    for(let current=head;current!==null;current=current.next){
        total++;
    }

    let mid=Math.floor(total/2)+1;

    let index=1;
    let prev=null;


    for(let current=head;current!==null;current=current.next){
        if(index===mid){
            if(index===1){
             head=head.next;
            }
            else{
                prev.next=current.next;
            }

        }
            prev=current;
            index++;

    }
    return head;
}

let ans=deleteMiddle(node1,);

let consoleLL = function(head) {
    for (let current = head; current !== null; current = current.next) {
        console.log(current.val);
    }
};

consoleLL(ans);
