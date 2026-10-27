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
        this.next=next;
        this.prev=prev;
    }
}

let linkedList1=new LinkList();
let linkedList2=new LinkList();


let node1=new ListNode(5);
let node2=new ListNode(4);
let node3=new ListNode(4);


linkedList1.head=node1;
node1.next=node2;
node2.prev=node1;
node2.next=null;

linkedList2=head=node3;
node3.next=null;

let convertLinklistToNum=function(head){
    let number=0;
    for(let current=head;current!=null;current=current.next){
         number = number * 10 + current.data;
    }

    console.log("number",number)
}

convertLinklistToNum(node1);

let addTwoNumbers=function(linkedList1,linkedList2){
         let list=new LinkList(null);
          let num1=new ListNode(convertLinklistToNum(linkedList1.head));
          let num2=new ListNode(convertLinklistToNum(linkedList2.head))

          let sumnum=num1+num2;
          convertLinklistToNum(sumnum)
         list.head=node1;
         node1.next=node2;
         node2.prev=node1;

         let sum=reverseDLL(list.head);

         return sum;

}

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

let ans=addTwoNumbers(linkedList1,linkedList2);


let consoleLL=function(head){
    for(let current=head;current!==null;current=current.next){
        console.log(current.data);
    }
}

consoleLL(ans)