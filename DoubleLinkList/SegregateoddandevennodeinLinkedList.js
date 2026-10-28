class NodeList{
    constructor(data,prev=null,next=null){
       this.data=data;
       this.prev=prev;
       this.next=next;
    }
}

class LinkList{
    constructor(head,tail){
        this.head=head;
        this.tail=tail;
    }
}




let LL1=new LinkList();
// let LL2=new LinkList();

let nodeLL11=new NodeList(1);
let nodeLL12=new NodeList(2);
let nodeLL13=new NodeList(3);
let nodeLL14=new NodeList(4);
let nodeLL15=new NodeList(5);


// let nodeLL21=new NodeList(1);
// let nodeLL22=new NodeList(2);
// let nodeLL23=new NodeList(3);

LL1.head=nodeLL11;
nodeLL11.next=nodeLL12;
nodeLL12.prev=nodeLL11;
nodeLL12.next=nodeLL13;
nodeLL13.prev=nodeLL12;
nodeLL13.next=nodeLL14;
nodeLL14.prev=nodeLL13;
nodeLL14.next=nodeLL15;
nodeLL15.prev=nodeLL14;

// LL2.head=nodeLL21;
// nodeLL21.next=nodeLL22;
// nodeLL22.prev=nodeLL21;
// nodeLL22.next=nodeLL23;
// nodeLL23.prev=nodeLL22;




let oddEvenList = function (LL1) {
    let odd = LL1.head;

    if (odd === null) return null;

    let even = odd.next;
    let evenHead = even;

    while (even !== null && even.next !== null) {
        // Connect odd-indexed nodes
        odd.next = even.next;
        even.next.prev = odd;
        odd = odd.next;

        // Connect even-indexed nodes
        even.next = odd.next;

        if (even.next !== null) {
            even.next.prev = even;
        }

        even = even.next;
    }

    // Attach the even-indexed list after the odd-indexed list
    odd.next = evenHead;

    if (evenHead !== null) {
        evenHead.prev = odd;
    }

    return LL1.head;
};



let ans=oddEvenList(LL1);

let consoleLL=function(head){
    for(let current=head;current!=null;current=current.next){
        console.log(current.data);
    }
}

consoleLL(ans)
// consoleLL(LL2.head)