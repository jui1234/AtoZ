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

console.log("insert",insert([3,2,1],2.5))
console.log("insert",insert([3,2,1],4))