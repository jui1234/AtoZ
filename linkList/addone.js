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

let  addOne=function(head) {
    let count=1;
      let LinkListnew=new LinkList(null);


    for(let current=head;current!=null;current=current.next){
      count = count * 10 + current.val;
    }

    count = count + 1;

    while(count!==null){
       let digit = Math.floor(count / 100);
       let remaining = 123 % 100;

       let newnode=new ListNode(digit);

       if(LinkListnew.head===null){
        head=newnode;
       }
       LinkListnew.next=newnode;

       count=remaining;
    }
    return LinkListnew.head;
}




let ans=addOne(node1);
   console.log("digit",digit,remaining)
let consoleLL = function(head) {
    for (let current = head; current !== null; current = current.next) {
        console.log(current.val);
    }
};

consoleLL(ans);