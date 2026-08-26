
let findPairsWithGivenSum=function(head,target){
    let current=head;
    let left=current;
    let right=null;
    let result=[];
    while(current!==null && current.next!==null){
        current=current.next;
    }
   right=current;

    while(left !== right && right.next !== left){
     let ans=[];
     if(left.val+right.val===target){
        ans.push(left.val);
        ans.push(right.val);
        right=right.prev;
        left=left.next;
     result.push(ans)
     }
     else if(left.val+right.val>target){
        right=right.prev;
     }
     else{
        left=left.next;
     }
    }
    return result;
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
let node3=new DoubleLinkList(4);
let node4=new DoubleLinkList(5);
let node5=new DoubleLinkList(6);
let node6=new DoubleLinkList(8);
let node7=new DoubleLinkList(9);


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

let ans=findPairsWithGivenSum(node1,7);

console.log("ans",ans)