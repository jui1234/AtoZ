let InsertAtBottom=function(stack,element){
    if(stack.length<1){
        stack.push(element);
        return stack;
    }
    let top=stack.pop();
    InsertAtBottom(stack,element)
    stack.push(top);
     return stack;
}


console.log("InsertAtBottom",InsertAtBottom([4,3,2,1],6))