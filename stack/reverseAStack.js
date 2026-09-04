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

let reverseStack=function(stack){
    if(stack.length<=1){
        return;
    }

    let element=stack.pop();
    reverseStack(stack);
    InsertAtBottom(stack,element);
    return stack;
}


console.log("reverseStack",reverseStack([4,3,2,1]))
console.log("reverseStack",reverseStack([1,2,3,4,5,6]))