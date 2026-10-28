class NodeList{
    constructor(data,prev=null,next=null){
       this.data=data;
       this.prev=prev;
       this.next=next;
    }
}

class LinkList{
    constructor(head){
        this.head=head;
    }
}




let LL1=new LinkList();
let LL2=new LinkList();

let nodeLL11=new NodeList(4);
let nodeLL12=new NodeList(5);
let nodeLL13=new NodeList(6);


let nodeLL21=new NodeList(1);
let nodeLL22=new NodeList(2);
let nodeLL23=new NodeList(3);

LL1.head=nodeLL11;
nodeLL11.next=nodeLL12;
nodeLL12.prev=nodeLL11;
nodeLL12.next=nodeLL13;
nodeLL13.prev=nodeLL12;

LL2.head=nodeLL21;
nodeLL21.next=nodeLL22;
nodeLL22.prev=nodeLL21;
nodeLL22.next=nodeLL23;
nodeLL23.prev=nodeLL22;


let addTwoNumbers=function(LL1,LL2){
   
    let newLL=new LinkList(null);
    let ANode=LL1.head;
    let BNode=LL2.head;
    let tail=null;

    while(ANode!==null && BNode!==null){
        let sum=ANode.data+BNode.data;
        let NewNode=new NodeList(sum);
       
         if(newLL.head===null){
            newLL.head=NewNode;
           tail = NewNode;
         }
         else{
                 tail.next=NewNode;
         NewNode.prev=tail;
         tail=NewNode

         }
       
        ANode=ANode.next;
        BNode=BNode.next;
    }
   
    return newLL.head;
}

let ans=addTwoNumbers(LL1,LL2);

let consoleLL=function(head){
    for(let current=head;current!=null;current=current.next){
        console.log(current.data);
    }
}

consoleLL(ans)
// consoleLL(LL2.head)