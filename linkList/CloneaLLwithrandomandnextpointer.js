class ListNode {
    constructor(val = 0, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

const copyRandomList=function(head){
if(head===null){
    return null;
}
    let map=new Map();
    let current=head;

    while(current!==null){
        let newNode=new ListNode(current.val);
        map.set(current,newNode);
        current=current.next;
    }

    current=head;

 while (current !== null) {

        let copyNode = map.get(current);

        copyNode.next = map.get(current.next) || null;
        copyNode.random = map.get(current.random) || null;

        current = current.next;
    }
return  map.get(head);

}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

// next
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

// random
node1.random = null;
node2.random = node1;
node3.random = node5;
node4.random = node2;
node5.random = node3;

let head = node1;

let copiedHead = copyRandomList(head);

while(copiedHead!==null){
    console.log(copiedHead.val);
    copiedHead=copiedHead.next;
}