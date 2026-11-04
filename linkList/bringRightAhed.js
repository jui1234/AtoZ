class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


class LinkList {
    constructor(head){
        this.head=head;
        // this.tail=tail;
    }
}
let node1=new ListNode(10);
let node2=new ListNode(20);
let node3=new ListNode(30);
let node4=new ListNode(40);
let node5=new ListNode(50);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;
// node5.next=node3;

let bringRightahed=function(head,k){
    let total=0;
    let index=1;
  let newTail = null;
let originalTail = null;

    for(let current=head;current!==null;current=current.next){
        total++;
        originalTail=current;
    }

    k = k % total;

    if(k===0)return head;

    let newLL=new LinkList(null);

    let final=total-k;
    let current=head;
    let prev=null;


    while(current!==null){
        if(index===final){
            if(newLL.head===null){
                newLL.head=current;
                newTail=prev;
            }

            // current=current.next;
        }
        prev=current;
        current=current.next;
        
        index++;

    }

    originalTail.next = head;
    newTail.next = null;

    return newLL.head;
}

let reverans=bringRightahed(node1,2)

let  consoleLL=function(head){
    for(let current=head;current!==null;current=current.next){
        console.log(current.val)
    }
}

consoleLL(reverans);