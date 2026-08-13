const insertAtHead=function(head,x){
    
let newNode= new ListNode(x);
newNode.next=head;
head=newNode;
return head;
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

console.log("insertAtHead",insertAtHead(node1,7))