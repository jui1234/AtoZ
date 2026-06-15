let largestElement=function(nums){
    if(nums.length===1)return nums[0];
    let largestnumber=largestElement(nums.slice(1))
    return nums[0]>largestnumber?nums[0]:largestnumber;
}

console.log("largestElement",largestElement([3,3,6,1,8]))