let searchTarget=function(head,target){
while(head!==null){
    if(head.val===target){
        return true;
    }
    head=head.next;
}
    return false;

}

class LinkNode{
    constructor(val){
       this.val=val;
       this.next=null;
    }
}

let node1=new LinkNode(10);
let node2=new LinkNode(20);
let node3=new LinkNode(30);

node1.next=node2;
node2.next=node3;

console.log(searchTarget(node1,40))