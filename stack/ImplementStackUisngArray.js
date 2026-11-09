class ArrayStack {
    constructor() {
        this.stack = [];
    }

    push(x) {
     return   this.stack.push(x);
    }

    pop() {
      return  this.stack.pop();
    }

    top() {
      return  this.stack[this.stack.length-1]
    }

    isEmpty() {
      return  this.stack.length===0;
    }
}

let s = new ArrayStack();

s.push(10);
s.push(20);
s.push(30);

console.log(s.top());     // 30
console.log(s.pop());     // 30
console.log(s.top());     // 20
console.log(s.isEmpty()); // false