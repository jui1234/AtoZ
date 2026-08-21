class LinkList{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

let sortList=function(head){
    let zerohead=null;
    let zerotail=null;

    let onehead=null;
    let onetail=null;

    let twohead=null;
    let twotail=null;

    let current=head;

    while(current!==null){
        if(current.val===0){
            if(zerohead===null){
                zerohead=current;
                zerotail=current;
            }
            else{
                zerotail.next=current;
                zerotail=current;
            }
        }
        else if(current.val===1){
            if(onehead===null){
                onehead=current;
                onetail=current;
            }
            else{
                onetail.next=current;
                onetail=current;
            }
        }
        else if(current.val===2){
            if(twohead===null){
                twohead=current;
                twotail=current;
            }
            else{
                twotail.next=current;
                twotail=current;
            }
        }
 current=current.next;
       
    }

     if(zerohead!==null){
            head=zerohead;
            zerotail.next=onehead!==null?onehead:twohead;
        }
        else if(onehead!==null){
            head=onehead;
        }
        else{
            head=twohead;
        }

        if(onehead!==null){
            onetail.next=twohead;
        }
        if(twotail!==null){
            twotail.next=null;
        }

    return head;
}

let node1=new LinkList(0);
let node2=new LinkList(0);
let node3=new LinkList(1);
let node4=new LinkList(2);
let node5=new LinkList(2);
let node6=new LinkList(1);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;
node5.next=node6;

let ans=sortList(node1);

while(ans!==null){
    console.log(ans.val);
    ans=ans.next;
}

