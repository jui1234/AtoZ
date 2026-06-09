let bubbleSortsmallestElement=function(nums){
    for(let i=0;i<nums.length;i++){
         for(let j=0;j<nums.length-1-i;j++){
            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
            }
         }
    }
    return nums[0];
}

console.log("bubbleSortsmallestElement",bubbleSortsmallestElement([5,3,8,4,2]))