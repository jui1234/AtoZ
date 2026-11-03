class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
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
node5.next=node2;

let hasCycle=function(head){
let visited=[];
let current=head;

while(current!==null){
    if(visited.includes(current)){
        return true;
    }

    visited.push(current);
    current=current.next;
}
return false;
}

let ans=hasCycle(node1);

console.log(ans)


// let  consoleLL=function(head){
//     for(let current=head;current!==null;current=current.next){
//         console.log(current.val)
//     }
// }