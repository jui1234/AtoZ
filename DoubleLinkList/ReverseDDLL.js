class ListNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkList {
    constructor(head,prev=null,next=null){
        this.head=head;
        this.next-next;
        this.prev=prev;
    }
}

let list=new LinkList();

let node1=new ListNode(10);
let node2=new ListNode(20);
let node3=new ListNode(30);
let node4=new ListNode(40);


list.head=node1;
node1.next=node2;
node2.prev=node1;
node2.next=node3;
node3.prev=node2;
node3.next=node4;
node4.prev=node3;

let reverseDLL=function(head){
    let tail=new ListNode(null);

     for(let current=head;current!==null;current=current.next){
           if(current.next===null){
            tail=current;
           }
    }

    for(let current=tail;current!==null;current=current.prev){
        if(tail.next===null){
          let prev=current.prev;
          head=current;
          current.next=prev
        }

        current.next=current.prev;


    }
    return head;
}

let ans=reverseDLL(list.head);


let consoleLL=function(head){
    for(let current=head;current!==null;current=current.next){
        console.log(current.data);
    }
}

consoleLL(ans)