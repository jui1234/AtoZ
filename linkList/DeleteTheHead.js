const deleteAtHead = function(head) {
    return head.next;
}

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

// Get the new head
const newHead = deleteAtHead(node1);

// Print as 7,1,2,3
let current = newHead;
let result = [];

while (current !== null) {
    result.push(current.data);
    current = current.next;
}

console.log(result.join(","));