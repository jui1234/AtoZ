class Node{
    constructor(data,next){
        this.data=data;
        this.next=next;
    }
}

class stack{
    constructor(){
        this.top=null;
        this.length=0;
    }

    push(value){
        let NewNode=new Node(value);
        NewNode.next=this.top;
        this.top=NewNode;
        this.length++;
    }
}

