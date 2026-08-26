
let removeDuplicates=function(head,target){
 let current = head;

    while (current !== null && current.next !== null) {

        if (current.val === current.next.val) {

            let next = current.next;

            current.next = next.next;

            if (next.next !== null) {
                next.next.prev = current;
            }

        } 
        else {
            current = current.next;
        }
    }

    return head;
}


class DoubleLinkList{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

let node1=new DoubleLinkList(1);
let node2=new DoubleLinkList(2);
let node3=new DoubleLinkList(2);
let node4=new DoubleLinkList(2);
let node5=new DoubleLinkList(2);
let node6=new DoubleLinkList(3);
let node7=new DoubleLinkList(3);


node1.next=node2;
node2.prev=node1;
node2.next=node3;
node3.prev=node2;
node3.next=node4;
node4.prev=node3;
node4.next=node5;
node5.prev=node4;
node5.next=node6;
node6.prev=node5;
node6.next=node7;
node7.prev=node6;

let ans=removeDuplicates(node1,7);

while(ans!==null){
    console.log("ans",ans.val)
    ans=ans.next;
}

// console.log("ans",ans)