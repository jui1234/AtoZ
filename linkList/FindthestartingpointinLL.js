let findStartingPoint=function(head){
let slow=head;
let fast=head;

while(fast!==null && fast.next!==null){
    fast=fast.next.next;
    slow=slow.next;

    if(fast===slow){
        slow=head;
        while(slow!==fast){
            slow=slow.next;
            fast=fast.next;
        }
        return slow;
    }
}
return null;
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const node1 = new ListNode(6);
const node2 = new ListNode(3);
const node3 = new ListNode(7);

node1.next = node2;
node2.next = node3;
node3.next=node1;

// Get the new head
const newHead = findStartingPoint(node1);

// Print as 7,1,2,3
let current = newHead;
console.log("ans",current)
// let result = [];

// while (current !== null) {
//     result.push(current.data);
//     current = current.next;
// }

// console.log(result.join(","));