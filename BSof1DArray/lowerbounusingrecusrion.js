let lowerBound=function(nums,x,i){
    // let i=0;
     if (i >= nums.length) return nums.length;
    if(nums[i]>=x)return i;
    // i++;
    return lowerBound(nums,x,i+1)
}

console.log("lowerBound",lowerBound([1,2,2,3],2,0))
console.log("lowerBound",lowerBound([3,5,8,15,19],9,0))
console.log("lowerBound",lowerBound([3,5,8,15,19],3,0))