let stack=[];

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.pop();//remove the last element
console.log(stack[stack.length-1]);//peeek 

console.log(stack);
console.log(stack.length===0)///isEmpty