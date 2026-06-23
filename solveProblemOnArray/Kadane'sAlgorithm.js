let maxSubArray=function(nums){
    let maxSum=nums[0];
    let currentSum=nums[0];

    for(let i=1;i<nums.length;i++){
        currentSum=Math.max(nums[i],currentSum+nums[i])

        maxSum=Math.max(currentSum,maxSum);
    }

    return maxSum;
}

console.log("maxSubArray",maxSubArray([2, 3, 5, -2, 7, -4]))
console.log("maxSubArray",maxSubArray([-3, -2, -7, -2, -10, -4]));
console.log("maxSubArray",maxSubArray([ -1, 2, 3, -1, 2, -6, 5]));