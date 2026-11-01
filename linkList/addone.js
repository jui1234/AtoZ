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

let  addOne=function(head) {

    function addCarry(head){
        let current=head;
        if(current===null){
            return 1;
        }

       let carry= addCarry(current.next)

       let sum=current.val+carry;

       if(sum>9){
       current.val=0
       return 1;
       }
       else{
        current.val=sum;
        return 0;
       }
    }

    let carry = addCarry(head);

    if (carry === 1) {
        let newHead = new ListNode(1);
        newHead.next = head;
        return newHead;
    }
 return head;
}


let ans=addOne(node1);
 
let consoleLL = function(head) {
    for (let current = head; current !== null; current = current.next) {
        console.log(current.val);
    }
};

consoleLL(ans);
