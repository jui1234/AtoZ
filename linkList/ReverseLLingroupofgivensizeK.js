let ReveeseLL=function(head){
    let prev=null;
    let current=head;
    while(current!==null){
        let next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    return prev;
}
let reverseKGroup=function(head,k){
    let current=head;
    let currenthead=current;
    let headcount=0;
    let dummy=new ListNode(null);
    let tail=dummy;

    while(current!==null){
        headcount++;
        if(headcount===k){
           let nextgroupcurrent=current.next;
           current.next=null;
       
            let rev=ReveeseLL(currenthead);
            tail.next=rev;
            while(tail.next!==null){
                
                tail=tail.next;
            }

            currenthead=nextgroupcurrent;
            current=nextgroupcurrent;
            headcount=0
        }
        else{

        current=current.next;
        }
    }

        if(headcount>0){
            tail.next=currenthead;
        }
           
    
    return dummy.next;
}

class ListNode{
    constructor(val){
        this.val=val;
        this.next=null;
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

let ans=reverseKGroup(node1,3);

while(ans!==null){
    console.log(ans.val);
    ans=ans.next;
}




