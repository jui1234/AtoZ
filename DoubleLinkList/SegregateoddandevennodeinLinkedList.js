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


let node1 = new NodeList(10);
let node2 = new NodeList(20);
let node3 = new NodeList(30);
let node4 = new NodeList(40);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;


let oddEvenList = function(head) {
    let oddlist=new LinkList(null);
    let evenlist=new LinkList(null);

    let index=1;

    let current=head;

    while(current!==null){

        let nextnode=current.next;
        current.next=null;
        current.prev=null;
        if(index%2!==0){
            if(oddlist.head===null){
                oddlist.head=current;
                oddlist.tail=current;

            }
            oddlist.tail.next=current;
            oddlist.prev=oddlist.tail;
            oddlist.tail=current;
        }
        else{
            if(evenlist.head===null){
                evenlist.head=current;
                evenlist.tail=current;
            }

            evenlist.tail.next=current;
            evenlist.prev=evenlist.tail;
            evenlist.tail=current;
        }
        current=nextnode;
        index++;
    }

    if(oddlist.tail!==null){
        oddlist.tail.next=evenlist.head;
        if(evenlist.head!==null){
            evenlist.prev.head=oddlist.tail
        }
    }

    return oddlist.head;
}

let ans = oddEvenList(node1);

let consoleLL = function(head) {
    for (let current = head; current !== null; current = current.next) {
        console.log(current.data);
    }
};

consoleLL(ans);