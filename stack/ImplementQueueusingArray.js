class ArrayQueue {
    constructor(){
        this.queue=[];
    }

    push(x) {
       this.queue.push(x);
    }

    pop() {
      this.queue.shift();
    }

    peek() {
      return this.queue[0];
    }

    isEmpty() {

        return this.queue.length===0;
    }
}

let q=new ArrayQueue();

q.push(10);
q.push(20);
q.push(30);
console.log(q.peek());

q.pop();
console.log(q.peek());
console.log(q.isEmpty());   