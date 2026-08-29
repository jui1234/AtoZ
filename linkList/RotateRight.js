let getLength=function(head){
    let count=0;
    while(head!==null){
        count++;
        head=head.next;
    }
    return count;
}

class LinkNode{
    constructor(val){
       this.val=val;
       this.next=null;
    }
}

let rotateRight=function(head,k){
    if(head===null || head.next===null){
        return head;
    }

    let length=getLength(head);

    k=k%length;

    if(k===0){
        return head;
    }

    let current=head;
    let headcount=0;

    let dummy=new LinkNode(null);
     let target=length-k;

     let firstHead=null;
     let firstTail=null;
     let secondHead=null;
     let secondTail=null;

     while(current!==null){
        headcount++;

        if(headcount>target){
            if(secondHead===null){
                secondHead=current;
            }
            secondTail=current;
        }
        else{
            if(firstHead===null){
                firstHead=current;
            }
            firstTail=current;
        }
        current=current.next;
     }


   firstTail.next=null;

   secondTail.next=firstHead;

   dummy.next=secondHead;

   return dummy.next;

}

let node1=new LinkNode(1);
let node2=new LinkNode(2);
let node3=new LinkNode(3);
let node4=new LinkNode(4);
let node5=new LinkNode(5);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;

let ans= rotateRight(node1,2);

while(ans!==null){
    console.log(ans.val);
    ans=ans.next;
}


