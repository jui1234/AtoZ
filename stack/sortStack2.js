let insert=function(stack,element){
    if(stack.length===0 || element<stack[stack.length-1]){
        stack.push(element);
        return stack;
    }

    let top=stack.pop();
    insert(stack,element);
    stack.push(top);
    return stack;
}

let sortStack=function(stack){
    if(stack.length<=1){
        return stack;
    }

    let element=stack.pop();
    sortStack(stack);
    insert(stack,element)
    return stack;
}

console.log("sortStack",sortStack([4,1,3,2]))
console.log("sortStack",sortStack([1]))