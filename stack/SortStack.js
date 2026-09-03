let sortStack=function(stack){
     if(stack.length<=1)return;

     let first=stack.pop();

     sortStack(stack);
     insertStack(stack,first);
     return stack;

}

let insertStack=function(stack,value){
     if(stack.length===0 || stack[stack.length-1]<=value){
          stack.push(value);
          return ;
     }

     let top=stack.pop();
     insertStack(stack,value);
     stack.push(top);
}

console.log("sortStack",sortStack([4,3,1,2,5]))