let leaders=function(nums){
    let result=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[i+1]){
            result.push(nums[i]);
        }
    }
    result.push(nums[nums.length-1]);

    return result;
}

console.log("leaders",leaders( [1, 2, 5, 3, 1, 2]))
console.log("leaders",leaders( [-3, 4, 5, 1, -4, -5]))
console.log("leaders",leaders(  [-3, 4, 5, 1, -30, -10]))
// console.log("leaders",leaders( [1, 2, 5, 3, 1, 2]))