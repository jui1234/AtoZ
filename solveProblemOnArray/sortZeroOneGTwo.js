let sortZeroOneTwo=function(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length-1;j++){
            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
            }
        }
    }
    return nums;
}

console.log("sortZeroOneTwo",sortZeroOneTwo([1, 0, 2, 1, 0]))
console.log("sortZeroOneTwo",sortZeroOneTwo([0, 0, 1, 1, 1]))
console.log("sortZeroOneTwo",sortZeroOneTwo([1, 1, 2, 2, 1]))