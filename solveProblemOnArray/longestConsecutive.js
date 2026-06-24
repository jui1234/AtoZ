let longestConsecutive=function(nums){
    let uniqueArray=[... new Set(nums)].sort((a,b)=>a-b);
    // console.log(uniqueArray);
    let count=1;
    for(let i=0;i<uniqueArray.length;i++){
        if(uniqueArray[i]+1===uniqueArray[i+1]){
            count++;
        }
    }

    return count;
}

console.log("longestConsecutive",longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log("longestConsecutive",longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
console.log("longestConsecutive",longestConsecutive([1,9,3,10,4,20,2]))