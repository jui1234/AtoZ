class LinkNode{
    constructor(val){
       this.val=val;
       this.next=null;
    }
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

let node12=new LinkNode(7);
let node22=new LinkNode(8);
// let node32=new LinkNode(4);

// let node42=new LinkNode(5);


node12.next=node22;
node22.next=node4;
// node32.next=node3;


let    getIntersectionNode=function(headA, headB) {
    let pointerA=headA;
    let pointerB=headB;

    while(pointerA!==pointerB){
        pointerA=pointerA===null?headB:pointerA.next;
        pointerB=pointerB===null?headA:pointerB.next;
    }

    return pointerA;
}

let ans=getIntersectionNode(node1,node12);

console.log(ans.val)