

class LinkNode{
    constructor(val = 0, next = null, child = null) {
        this.val = val;
        this.next = next;
        this.child = child;
    }
}

let merge=function(head1,head2){
    let dummy=new LinkNode(null);
    let current=dummy;
    while(head1!==null && head2!==null){
        if(head1.val<head2.val){
            current.child=head1;
            head1=head1.child;
        }
        else{
            current.child=head2;
            head2=head2.child;
        }
        current=current.child;
   

    }
      if(head1!==null){
        current.child=head1;
     }
     else{
        current.child=head2;
     }
     return dummy.child;
    }

let flattenLinkedList=function(head){
    
    if(head===null || head.next===null){
        return head;
    }

    head.next=flattenLinkedList(head.next);

    head=merge(head,head.next)
    return head;
}

let node1 = new LinkNode(1);
let node2 = new LinkNode(2);
let node3 = new LinkNode(3);

let node4 = new LinkNode(4);
let node5 = new LinkNode(5);
let node6 = new LinkNode(6);

let node7 = new LinkNode(7);
let node8 = new LinkNode(8);


// First child list
node1.child = node2;
node2.child = node3;


// Second child list
node4.child = node5;
node5.child = node6;


// Third child list
node7.child = node8;


// Main list using next
node1.next = node4;
node4.next = node7;

let ans= flattenLinkedList(node1);

while(ans!==null){
    console.log(ans.val);
    ans=ans.child;
}


