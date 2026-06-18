let longestSubarray=function(nums,k){
    let maxcount=0;
    let total=0;
    for(let i=0;i<nums.length;i++){
                total=0;
        for(let j=i;j<nums.length;j++){
            total+=nums[j]
            if(total===k){
               maxcount=Math.max(maxcount,j-i+1);
            }
           
        }
    }
    return maxcount;
}

console.log("longestSubarray",longestSubarray([10, 5, 2, 7, 1, 9],15))
console.log("longestSubarray",longestSubarray([-3, 2, 1],6))
console.log("longestSubarray",longestSubarray([-1, 1, 1],1))