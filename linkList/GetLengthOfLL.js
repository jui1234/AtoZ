const getLength = function(head) {
    let count=0;
 while(head!==null)   {

    count++;
    head=head.next;
 }
 return count;
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

console.log("getLength",getLength(node1))

// Get the new head
