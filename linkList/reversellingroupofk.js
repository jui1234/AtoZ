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



let reverseKGroup = function(head, k) {
    let current = head;
    let prevGruptail = null;
    let newHead = null;

    while(current !== null) {

        let temp = current;
        let count = 0;

        while(temp !== null && count < k) {
            count++;
            temp = temp.next;
        }

        if(count < k) {
            break;
        }

        let nextgroup = temp;
        let node = current;
        let prev = null;

        while(node !== nextgroup) {
            let nextNode = node.next;
            node.next = prev;
            prev = node;
            node = nextNode;
        }

        if(newHead === null) {
            newHead = prev;
        }

        if(prevGruptail !== null) {
            prevGruptail.next = prev;
        }

        prevGruptail = current;
        current.next = nextgroup;

        current = nextgroup;
    }

    return newHead || head;
}

let reverans=reverseKGroup(node1,2)

let  consoleLL=function(head){
    for(let current=head;current!==null;current=current.next){
        console.log(current.val)
    }
}
 
consoleLL(reverans);