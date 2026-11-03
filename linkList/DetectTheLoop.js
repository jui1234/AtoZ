class LinkNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let node1 = new LinkNode(1);
let node2 = new LinkNode(2);
let node3 = new LinkNode(3);
let node4 = new LinkNode(4);
let node5 = new LinkNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node3;



