class NodeList {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class LinkList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }
}


let node1 = new NodeList(0);
let node2 = new NodeList(1);
let node3 = new NodeList(0);
let node4 = new NodeList(1);
let node5 = new NodeList(2);
let node6 = new NodeList(0);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
node4.next=node5;
node5.prev=node4;
node5.next=node6;
node6.prev=node5;

let sortList = function(head) {
    let zeroLL = new LinkList();
    let oneLL = new LinkList();
    let twoLL = new LinkList();

    let current = head;

    while (current !== null) {
        // Save the next node before changing links
        let nextNode = current.next;

        // Detach current from the original list
        current.next = null;
        current.prev = null;

        if (current.data === 0) {
            if (zeroLL.head === null) {
                zeroLL.head = current;
                zeroLL.tail = current;
            } else {
                zeroLL.tail.next = current;
                current.prev = zeroLL.tail;
                zeroLL.tail = current;
            }
        } else if (current.data === 1) {
            if (oneLL.head === null) {
                oneLL.head = current;
                oneLL.tail = current;
            } else {
                oneLL.tail.next = current;
                current.prev = oneLL.tail;
                oneLL.tail = current;
            }
        } else {
            if (twoLL.head === null) {
                twoLL.head = current;
                twoLL.tail = current;
            } else {
                twoLL.tail.next = current;
                current.prev = twoLL.tail;
                twoLL.tail = current;
            }
        }

        current = nextNode;
    }

    // Connect the 0s group to the 1s group
    if (zeroLL.tail !== null) {
        zeroLL.tail.next = oneLL.head;
        if (oneLL.head !== null) {
            oneLL.head.prev = zeroLL.tail;
        }
    }

    // Connect the combined groups to the 2s group
    if (oneLL.tail !== null) {
        oneLL.tail.next = twoLL.head;
        if (twoLL.head !== null) {
            twoLL.head.prev = oneLL.tail;
        }
    } else if (zeroLL.tail !== null) {
        // There are no 1s, so connect 0s directly to 2s
        zeroLL.tail.next = twoLL.head;
        if (twoLL.head !== null) {
            twoLL.head.prev = zeroLL.tail;
        }
    }

    // Return the first non-empty group's head
    if (zeroLL.head !== null) return zeroLL.head;
    if (oneLL.head !== null) return oneLL.head;
    return twoLL.head;
};

let ans=sortList(node1);

let consoleLL = function(head) {
    for (let current = head; current !== null; current = current.next) {
        console.log(current.data);
    }
};

consoleLL(ans);
