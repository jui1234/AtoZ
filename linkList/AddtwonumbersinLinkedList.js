class LinkList{
    constructor(val){
        this.val=val;
        this.next=null;

    }
}

let createList = function(str) {

    let dummy = new LinkList(null);
    let current = dummy;

    for(let i = 0; i < str.length; i++) {
        current.next = new LinkList(Number(str[i]));
        current = current.next;
    }

    return dummy.next;
};

let reverse=function(head){
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

let StringFromNumber=function(head){
    let current=head;
    let sum="";

    while(current!==null){
        sum+=current.val;
        current=current.next;
    }
    return sum;
}




let addTwoNumbers=function(linkedList1,linkedList2){
   let RevLL1=reverse(linkedList1);
   let RevLL2=reverse(linkedList2);

   let RRLLStr1=StringFromNumber(RevLL1);
   let RRLLStr2=StringFromNumber(RevLL2);

   let total=Number(RRLLStr1)+Number(RRLLStr2);

   let ans=reverse(createList(String(total)));

   return ans;
}

let node1 = new LinkList(4);

let node2 = new LinkList(5);
let node3 = new LinkList(4);

node2.next = node3;

let ans = addTwoNumbers(node1, node2);

while (ans !== null) {
    console.log(ans.val);
    ans = ans.next;
}



// console.log("ans",ans)

// while(ans!==null){
//     console.log(ans.val);
//     ans=ans.next;
// }

