let kthElement=function(a,b,k){
    let result=[...a,...b];
    result.sort((a,b)=>a-b);
    console.log("result",result)
    return result[k-1];
}

console.log("kthElement",kthElement([2, 3, 6, 7, 9],[1, 4, 8, 10],5))
console.log("kthElement",kthElement([100, 112, 256, 349, 770], [72, 86, 113, 119, 265, 445, 892],7))
console.log("kthElement",kthElement([2, 3, 6],[7,9],4))