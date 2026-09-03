let removeXFeomStack=function(stack,x){
     if(stack.length===0){
        return;
     }

     let top=stack.pop();

     if(top!==x){
        removeXFeomStack(stack,x);
          stack.push(top);
     }
     return stack;
}

console.log("removeXFeomStack",removeXFeomStack([1,2,3,4,5],3))
console.log("removeXFeomStack",removeXFeomStack([1,2,3,4,5],2))