let  getIntersectionNode=function(headA, headB) {
       let pa=headA;
       let pb=headB;

       while(pa!==pb){
        if(pa===null){
            pa=headB;
        }
        else{

       pa= pa.next;
        }

        if(pb===null){
            pb=headA;
        }
        else{
        pb=pb.next;
        }

       }

       return pa;

   
    }

    class LinkList{
        constructor(val){
            this.val=val;
            this.next=null;
        }
    }
  let headAPA = new LinkList(5);

let headBPB = new LinkList(6);

let node1 = new LinkList(10);
let node2 = new LinkList(20);
let node3 = new LinkList(30);
let node4 = new LinkList(40);
let node5 = new LinkList(50);
let node6 = new LinkList(60);


// List A
headAPA.next = node1;
node1.next = node2;
node2.next = node3;


// Shared part
node3.next = node4;
node4.next = node5;
node5.next = node6;


// List B
headBPB.next = node3;


let ans = getIntersectionNode(headAPA, headBPB);

console.log(ans.val);
