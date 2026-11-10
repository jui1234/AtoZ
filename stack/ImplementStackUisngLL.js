class Node{
    constructor(data,next,prev){
        this.data=data;
        this.next=next;
        this.prev=prev;
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

    pop(){
         if(this.length===0){
            return;
         }
         else{
 this.top=this.top.next;
         this.length--; 
         }
              
    }
    peek(){
         if (this.top === null) {
            return -1;
        }

        return this.top.data;

    }

    isEmpty(){
        return this.length===0;
    }
}


let s=new stack();

s.push(10);
s.push(20);
s.push(30);

console.log(s.peek());
s.pop();

console.log(s.isEmpty());
