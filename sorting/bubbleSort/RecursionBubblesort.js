let RecursiveBubble=function(nums){
    if(nums.length<=1){
        return nums;
    }

    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]){
            [nums[i],nums[i+1]]=[nums[i+1],nums[i]]
        }
    }

    return RecursiveBubble(nums.slice(0,nums.length-1)).concat(nums[nums.length-1])//concatenate the last element which is the largest one after each iteration

}

console.log("RecursiveBubble",RecursiveBubble([5,3,8,4,2]))
console.log("RecursiveBubble",RecursiveBubble([13,46,24,52,20,9]))