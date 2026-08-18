let hasCycle=function(head){
    let slow=head;
    let fast=head;

   while(fast!==null && fast.next!==null){
    slow=slow.next;
    fast=fast.next.next;

    if(slow===fast){
        return true;
    }

   }
   return false;
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;
// node3.next=node2;

// Get the new head
const newHead = hasCycle(node1);

// Print as 7,1,2,3
let current = newHead;
console.log("ans",current)
// let result = [];

// while (current !== null) {
//     result.push(current.data);
//     current = current.next;
// }

// console.log(result.join(","));