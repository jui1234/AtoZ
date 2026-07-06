let ReversePairs=function(nums){
    let count=0;

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j]*2  && i<j){
                count++;
            }
        }
    }
    return count;
}

console.log("ReversePairs",ReversePairs( [6, 4, 1, 2, 7]))
console.log("ReversePairs",ReversePairs([5, 4, 4, 3, 3]))
console.log("ReversePairs",ReversePairs([6, 4, 4, 2, 2]))
