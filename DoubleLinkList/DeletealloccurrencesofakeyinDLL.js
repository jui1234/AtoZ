let deleteAllOccurrences = function(head, target) {

    if (head === null) return head;

    if (head.val === target) {
        head = head.next;

        if (head !== null) {
            head.prev = null;
        }
    }

    let current = head;

    while (current !== null) {
        if (current.val === target) {
            let prevstore = current.prev;

            prevstore.next = current.next;

            if (current.next !== null) {
                current.next.prev = prevstore;
            }
        }

        current = current.next;
    }

    return head;
}

class DoubleLinkList{
  constructor(val, prev = null, next = null) {
       this.val=val;
       this.prev=prev;
       this.next=next;
    }
}

let node1=new DoubleLinkList(1);
let node2=new DoubleLinkList(20);
let node3=new DoubleLinkList(1);
let node4=new DoubleLinkList(30);

node1.next=node2;
node2.prev=node1;
node2.next=node3;
node3.prev=node2;
node3.next=node4;
node4.prev=node3;


let current=deleteAllOccurrences(node1,1);

while(current!==null){
    console.log(current.val);
    current=current.next;
}