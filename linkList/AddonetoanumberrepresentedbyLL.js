class LinkList{
    constructor(val){
        this.val=val;
        this.next=null;

    }
}

let addOne=function(head){
    let current=head;
    let sum="";

    while(current!==null){
        sum+=current.val;
        current=current.next;
    }

    let sumNum=Number(sum)+1;

    let SumStr=String(sumNum);

    let dummy=new LinkList(null);
    let currentDummy=dummy;

    for(let i=0;i<SumStr.length;i++){
        currentDummy.next=new LinkList(Number(SumStr[i]));
        currentDummy=currentDummy.next;
    }

    return dummy.next;
}

let node1=new LinkList(1);
let node2=new LinkList(9);
let node3=new LinkList(9);

node1.next=node2;
node2.next=node3;

let ans=addOne(node1);

while(ans!==null){
    console.log(ans.val);
    ans=ans.next;
}

