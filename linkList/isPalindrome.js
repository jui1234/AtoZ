class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkList {
   constructor(head){
    this.head=head;
   }
}

let node1=new ListNode(10);
let node2=new ListNode(20);
let node3=new ListNode(20);
let node4=new ListNode(10);
let node5=new ListNode(20);


node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;

let isPalindrome=function(head){
     let slow=head;
     let fast=head;

     while(fast && fast.next){
      slow=slow.next;
      fast=fast.next.next;
     }

     let prevcu=null;
     let headcu=null;
     let nextcu=null;
     let current=slow;

     while(current!==null){
          nextcu=current.next;
          current.next=prevcu;
          prevcu=current;
          current=nextcu;
     }
   
     let first = head;
    let second = prevcu;

    while (second !== null) {
        if (first.val !== second.val) {
            return false;
        }

        first = first.next;
        second = second.next;
    }

    return true;


}

let ans=isPalindrome(node1);
console.log(ans)
// let ans=isPalindrome(node1);

// let consoleLL=function(head){
//      for(let current=head;current!==null;current=current.next){
//             console.log(current.val)
//      }
// }

// consoleLL(ans);