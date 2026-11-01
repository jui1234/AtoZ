class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkList{
    constructor(head){
        this.head=head;
    }
}

let node1=new ListNode(1);
let node2=new ListNode(2);
let node3=new ListNode(3);
let node4=new ListNode(4);
let node5=new ListNode(5);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;

let middleOfLinkedList=function(head) {
    let total=0;

    for(let current=head;current!=null;current=current.next){
        total++;
    }

    let num=Math.ceil(total/2);

    if(num%2===1){
        num++;
    }

      for(let current=head;current!=null;current=current.next){
        if(num===current){
            return current;
        }
    }
        return head;

}


let ans=middleOfLinkedList(node1);
// console.log(ans)
 
let consoleLL = function(head) {
    for (let current = head; current !== null; current = current.next) {
        console.log(current.val);
    }
};
// console.log("as",5/2)
consoleLL(ans);
