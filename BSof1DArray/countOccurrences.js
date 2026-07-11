let countOccurrences=function(arr,target){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            count++;
        }
    }
    return count;
}

console.log("countOccurrences",countOccurrences([0, 0, 1, 1, 1, 2, 3],1))
console.log("countOccurrences",countOccurrences([5,5,5,5,5,5],5))
console.log("countOccurrences",countOccurrences([2, 4, 6, 8, 10],3))