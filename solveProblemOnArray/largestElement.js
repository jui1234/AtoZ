let largestElement=function(nums){
    let max=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i]
        }
    }
    return max;
}

console.log("largestElement",largestElement([3,3,6,8,1]))