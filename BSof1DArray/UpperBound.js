let upperBound = function(nums, x) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]>x)return i;
    }
    return -1;
}

console.log("upperBound", upperBound([1,2,2,3], 2)); // 3
console.log("upperBound", upperBound([3,5,8,15,19], 9)); 
console.log("upperBound", upperBound([3,5,8,15,19], 3)); 