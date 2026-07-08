let upperBound = function(nums, x) {
    if (nums.length === 0) return -1;

    if (nums[0] > x) return 0;

    let ans = upperBound(nums.slice(1), x);

    if (ans === -1) return -1;

    return ans + 1;
}

console.log("upperBound", upperBound([1,2,2,3], 2)); // 3
console.log("upperBound", upperBound([3,5,8,15,19], 9)); 
console.log("upperBound", upperBound([3,5,8,15,19], 3)); 